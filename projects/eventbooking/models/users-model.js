import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

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

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'class':
        table = `((${table} INNER JOIN Bookings ON UserID=BookingUserID) LEFT JOIN Bookingstatus ON BookingBookingstatusID=BookingstatusID)`;
        fields = [
          ...fields,
          'BookingstatusID AS UserBookingstatusID',
          'BookingstatusName AS UserBookingstatusName',
          'BookingBookingdate AS UserBookingBookingdate',
        ];
        where = 'BookingClassID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
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

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'UserGenderName',
      'UserUsertypeName',
      'UserBookingstatusName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
