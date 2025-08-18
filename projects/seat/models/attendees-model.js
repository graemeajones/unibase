import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Attendees',
  idField: 'AttendeeID',
  mutableFields: [
    'AttendeeUserID',
    'AttendeeEventID',
    'AttendeeStatusID',
    'AttendeeTable',
    'AttendeeSeat',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(((((${table} LEFT JOIN Users ON AttendeeUserID=UserID) 
                           LEFT JOIN Events ON AttendeeEventID=EventID) 
                           LEFT JOIN Status ON AttendeeStatusID=StatusID)
                           LEFT JOIN Roles ON UserRoleID=RoleID)
                           LEFT JOIN Users AS Hosts ON Users.UserGuestofID=Hosts.UserID)`;
    fields = [
      ...fields,
      `CONCAT( 
        Users.UserLastname, ", ", Users.UserFirstname, 
        " (", 
            CASE 
              WHEN Users.UserUsertypeID=1 THEN RoleName 
              ELSE CONCAT("Guest of ",Hosts.UserLastname, ", ", Hosts.UserFirstname) 
            END, 
        ")" 
      ) AS AttendeeUserName`,
      'EventName AS AttendeeEventName',
      'StatusName AS AttendeeStatusName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'AttendeeUserName',
      'AttendeeEventName',
      'AttendeeStatusName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'AttendeeID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
