import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Modules',
  idField: 'ModuleID',
  mutableFields: [
    'ModuleCode',
    'ModuleName',
    'ModuleImageURL',
    'ModuleLeaderID',
    'ModuleLevel',
    'ModuleCredits',
    'ModuleSize',
    'ModuleEffort',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Users ON ModuleLeaderID=UserID)`;
    fields = [fields, 'CONCAT(UserFirstname," ",UserLastname) AS ModuleLeaderName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ModuleLeaderName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'leader':
        where = 'ModuleLeaderID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
