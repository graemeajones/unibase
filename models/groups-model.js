const model = {};

model.table = 'Groups';
model.idField = 'GroupID';
model.mutableFields = ['GroupName', 'GroupAssessmentID'];

model.buildReadQuery = (variant, ids) => {
  const resolvedTable =
    '((Groups LEFT JOIN Assessments ON GroupAssessmentID=AssessmentID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)';
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'AssessmentName AS GroupAssessmentName',
    'ModuleID AS GroupModuleID',
    'ModuleName AS GroupModuleName',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'assessment':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE AssessmentID=:ID`;
      data = { ID: ids['assessment'] };
      break;
    case 'users':
      const extendedTable = `Groupmembers INNER JOIN ${resolvedTable} ON Groupmembers.GroupmemberGroupID=Groups.GroupID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE GroupmemberUserID=:ID`;
      data = { ID: ids['users'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE GroupID=:ID`;
        data = { ID: ids['groups'] };
      }
  }
  sql += ' ORDER BY GroupName';

  return { sql, data };
};

export default model;
