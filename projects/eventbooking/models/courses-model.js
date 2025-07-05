import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Courses',
  idField: 'CourseID',
  mutableFields: ['CourseName', 'CourseProviderID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Providers ON CourseProviderID=ProviderID)`;
    fields = [...fields, 'ProviderName AS CourseProviderName'];

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
