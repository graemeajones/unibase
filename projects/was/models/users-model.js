import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: [
    'UserTitle',
    'UserFirstname',
    'UserLastname',
    'UserEmail',
    'UserImageURL',
    'UserUsertypeID',
    'UserPositionID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const EMPLOYEE = 1; // Primary key for client type in Usertypes table
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `((${table} LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) 
                        LEFT JOIN Positions ON UserPositionID=PositionID)`;
    fields = [...fields, 'UsertypeName AS UserUsertypeName', 'PositionName AS UserPositionName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'UserUsertypeName', 'UserPositionName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'UserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
