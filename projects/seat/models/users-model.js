import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users',
  idField: 'Users.UserID',
  mutableFields: [
    'Users.UserFirstname',
    'Users.UserLastname',
    'Users.UserEmail',
    'Users.UserDateofbirth',
    'Users.UserImageURL',
    'Users.UserUsertypeID',
    'Users.UserRoleID',
    'Users.UserGuestofID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const EMPLOYEE = 1; // Primary key for client type in Usertypes table
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `((((${table} LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) 
                          LEFT JOIN Roles ON UserRoleID=RoleID) 
                          LEFT JOIN Users AS Employees ON Users.UserGuestofID=Employees.UserID)
                          LEFT JOIN Roles AS Employeeroles ON Employees.UserRoleID=Employeeroles.RoleID)`;
    fields = [
      ...fields,
      'UsertypeName AS UserUsertypeName',
      'Roles.RoleName AS UserRoleName',
      'CONCAT(Employees.UserLastname,", ",Employees.UserFirstname," (",Employeeroles.RoleName,")") AS UserGuestofName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'UserUsertypeName',
      'UserRoleName',
      'UserGuestofName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'employees':
        where = `Users.UserUsertypeID=${EMPLOYEE}`;
        break;
      case 'roles':
        where = 'Users.UserRoleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'Users.UserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
