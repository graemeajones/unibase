import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users AS Users',
  idField: 'UserID',
  mutableFields: [
    'UserFirstname',
    'UserLastname',
    'UserEmail',
    'UserDateofbirth',
    'UserImageURL',
    'UserUsertypeID',
    'UserRoleID',
    'UserGuestofID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const EMPLOYEE = 1; // Primary key for client type in Usertypes table
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(((${table} LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) 
                         LEFT JOIN Roles ON UserRoleID=RoleID)
                         LEFT JOIN (
                           SELECT UserID AS HostID, UserFirstname AS HostFirstname, UserLastname AS HostLastname, RoleName AS HostRoleName 
                           FROM (Users LEFT JOIN Roles ON UserRoleID=RoleID)
                         ) AS Hosts ON UserGuestofID=Hosts.HostID)`;
    fields = [
      ...fields,
      'UsertypeName AS UserUsertypeName',
      'Roles.RoleName AS UserRoleName',
      'CONCAT(HostLastname,", ",HostFirstname, " (", HostRoleName, ")") AS UserGuestofName',
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
        where = `UserUsertypeID=${EMPLOYEE}`;
        break;
      case 'roles':
        where = 'UserRoleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
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
