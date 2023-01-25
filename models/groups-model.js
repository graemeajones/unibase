const model = {};

model.table = 'Groups';
model.mutableFields = ['GroupName', 'GroupProjectID'];
model.idField = 'GroupID';

model.buildReadQuery = (id, variant) => {
  const resolvedTable = `(Groups LEFT JOIN Projects ON GroupProjectID=ProjectID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'ProjectName AS GroupProjectName'
  ];

  let sql = '';
  switch (variant) {
    case 'project':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ProjectID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE GroupID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
