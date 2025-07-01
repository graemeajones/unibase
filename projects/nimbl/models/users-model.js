import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: [
    'UserFirstname',
    'UserLastname',
    'UserEmail',
    'UserImageURL',
    'UserUsertypeID',
    'UserLevel',
    'UserGems',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const CLIENT = 1; // Primary key for client type in Usertypes table
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID)`;
    fields = [...fields, 'UsertypeName AS UserUsertypeName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'UserUsertypeName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'clients':
        where = `UserUsertypeID=${CLIENT}`;
        break;
      case 'primary':
        where = 'UserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
