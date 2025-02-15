import { parseRequestQuery, constructPreparedStatement } from '../../../models/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: [
    'UserFirstname',
    'UserLastname',
    'UserEmail',
    'UserPhone',
    'UserDatejoined',
    'UserDateofbirth',
    'UserGenderID',
    'UserUsertypeID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const CLIENT = 1; // Primary key for client type in Usertypes table
    const INSTRUCTOR = 2; // Primary key for instructor type in Usertypes table

    // Resolve Foreign Keys -------------------
    let table = `((Users LEFT JOIN Genders ON UserGenderID=GenderID) 
                         LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'GenderName AS UserGenderName',
      'UsertypeName AS UserUsertypeName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'UserGenderName', 'UserUsertypeName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'instructors':
        where = `UserUsertypeID=${INSTRUCTOR}`;
        break;
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
