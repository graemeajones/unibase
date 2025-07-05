import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Bookings',
  idField: 'BookingID',
  mutableFields: [
    'BookingUserID',
    'BookingClassID',
    'BookingBookingdate',
    'BookingBookingstatusID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(((${table} LEFT JOIN Users ON BookingUserID=UserID) 
                         LEFT JOIN Classes ON BookingClassID=ClassID) 
                         LEFT JOIN Bookingstatus ON BookingBookingstatusID=BookingstatusID)`;
    fields = [
      ...fields,
      'CONCAT(UserLastname, ", ", UserFirstname) AS BookingAttendeeName',
      'ClassTitle AS BookingClassTitle',
      'BookingstatusName AS BookingBookingstatusName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'BookingAttendeeName',
      'BookingClassTitle',
      'BookingBookingstatusName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'BookingID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
