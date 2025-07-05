import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Classes',
  idField: 'ClassID',
  mutableFields: [
    'ClassTitle',
    'ClassCourseID',
    'ClassDay',
    'ClassTime',
    'ClassDuration',
    'ClassLocationID',
    'ClassCapacity',
    'ClassInstructorID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(((${table} LEFT JOIN Courses ON ClassCourseID=CourseID) 
                         LEFT JOIN Locations ON ClassLocationID=LocationID) 
                         LEFT JOIN Users ON ClassInstructorID=UserID)`;
    fields = [
      ...fields,
      'CourseName AS ClassCourseName',
      'LocationName AS ClassLocationName',
      'CONCAT(UserLastname, ", ", UserFirstname) AS ClassInstructorName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'ClassCourseName',
      'ClassLocationName',
      'ClassInstructorName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'course':
        where = 'ClassCourseID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'user':
        table = `((${table} INNER JOIN Bookings ON ClassID=BookingClassID) 
                            INNER JOIN Bookingstatus ON BookingBookingstatusID=BookingstatusID)`;
        fields = [
          ...fields,
          'BookingID AS ClassBookingID',
          'BookingBookingdate AS ClassBookingdate',
          'BookingBookingstatusID AS ClassBookingstatusID',
          'BookingstatusName AS ClassBookingstatusName',
        ];
        where = 'BookingUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ClassID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
