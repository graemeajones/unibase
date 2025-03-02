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
    // Resolve Foreign Keys -------------------
    let table = `(((Classes LEFT JOIN Courses ON ClassCourseID=CourseID) 
                            LEFT JOIN Locations ON ClassLocationID=LocationID) 
                            LEFT JOIN Users ON ClassInstructorID=UserID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
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
      case 'primary':
        where = 'ClassID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
