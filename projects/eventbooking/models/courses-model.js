import { parseRequestQuery, constructPreparedStatement } from '../../../models/utils.js';

const model = {
  table: 'Courses',
  idField: 'CourseID',
  mutableFields: ['CourseName', 'CourseProviderID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table = `(Courses LEFT JOIN Providers ON CourseProviderID=ProviderID)`;
    let fields = [model.idField, ...model.mutableFields, 'ProviderName AS CourseProviderName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'CourseProviderName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'providers':
        where = 'CourseProviderID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'CourseID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
