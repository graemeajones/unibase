import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: ['UserFirstname', 'UserLastname', 'UserImageURL', 'UserUsertypeID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const CLIENT = 1; // Primary key for client type in Usertypes table

    // Resolve Foreign Keys -------------------
    let table = `(Users LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID)`;
    let fields = [model.idField, ...model.mutableFields, 'UsertypeName AS UserUsertypeName'];

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

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'UserUsertypeName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
