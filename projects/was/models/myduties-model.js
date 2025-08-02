import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Myduties',
  idField: 'MydutyID',
  mutableFields: ['MydutyUserID', 'MydutyDutyID', 'MydutyName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `((${table} INNER JOIN Users ON MydutyUserID=UserID) 
                        INNER JOIN Duties ON MydutyDutyID=DutyID)`;
    fields = [
      ...fields,
      'CONCAT(UserLastname, ", ", UserFirstname) AS MydutyUserName',
      'CASE WHEN MydutyName = "" THEN DutyName ELSE CONCAT(DutyName, " (", MydutyName, ")") END AS MydutyDutyName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'MydutyUserName', 'MydutyDutyName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'MydutyID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        where = 'MydutyUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'duties':
        where = 'MydutyDutyID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
