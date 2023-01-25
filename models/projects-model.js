const model = {};

model.table = 'Projects';
model.mutableFields = ['ProjectName', 'ProjectGroupsize', 'ProjectStartdate', 'ProjectProjectstatusID', 'ProjectModuleID'];
model.idField = 'ProjectID';

model.buildReadQuery = (id, variant) => {
  const resolvedTable = `((Projects LEFT JOIN Projectstatus ON ProjectProjectstatusID=ProjectstatusID) LEFT JOIN Modules ON ProjectModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'ProjectstatusName AS ProjectProjectstatusName',
    'CONCAT(ModuleCode, " ", ModuleName) AS ProjectModuleName'
  ];

  let sql = '';
  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ProjectModuleID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE ProjectID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
