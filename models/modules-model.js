const model = {};

model.table = 'Modules';
model.idField = 'ModuleID';
model.mutableFields = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleYearID', 'ModuleLeaderID', 'ModuleImageURL'];

model.buildReadQuery = (req, variant) => {
  const resolvedTable = '((Modules LEFT JOIN Users ON ModuleLeaderID=UserID) LEFT JOIN Years ON ModuleYearID=YearID )';
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(UserFirstname," ",UserLastname) AS ModuleLeaderName',
    'YearName AS ModuleYearName',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'leader':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModuleLeaderID=:ID`;
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
        sql += ` WHERE ModuleID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
