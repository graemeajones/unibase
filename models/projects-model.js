const model = {};

model.table = 'Projects';
model.idField = 'ProjectID';
model.mutableFields = [
  'ProjectName',
  'ProjectGroupsize',
  'ProjectStartdate',
  'ProjectMandatory',
  'ProjectProjectstatusID',
  'ProjectModuleID',
];

model.buildReadQuery = (req, variant) => {
  const resolvedTable = `((Projects LEFT JOIN Projectstatus ON ProjectProjectstatusID=ProjectstatusID) LEFT JOIN Modules ON ProjectModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'ProjectstatusName AS ProjectProjectstatusName',
    'CONCAT(ModuleCode, " ", ModuleName) AS ProjectModuleName',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ProjectModuleID=:ID`;
      data = { ID: req.params.id };
      break;
    case 'users':
      const extendedTable = `Modulemembers INNER JOIN ${resolvedTable} ON Modulemembers.ModulememberModuleID=Modules.ModuleID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE ModulememberUserID=:ID`;
      data = { ID: req.params.id };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (req.params.id) {
        sql += ` WHERE ProjectID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
