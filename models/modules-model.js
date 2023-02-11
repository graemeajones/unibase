const model = {};

model.table = 'Modules';
model.mutableFields = ['ModuleName', 'ModuleCode', 'ModuleLevel', 'ModuleYearID', 'ModuleLeaderID', 'ModuleImageURL'];
model.idField = 'ModuleID';

model.buildReadQuery = (id, variant) => {
  const resolvedTable = '((Modules LEFT JOIN Users ON ModuleLeaderID=UserID) LEFT JOIN Years ON ModuleYearID=YearID )';
  const resolvedFields = [ model.idField, ...model.mutableFields, 'CONCAT(UserFirstname," ",UserLastname) AS ModuleLeaderName', 'YearName AS ModuleYearName'];

  let sql = '';
  switch (variant) {
    case 'leader':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModuleLeaderID=:ID`;
      break;
    case 'users':
      const extendedTable = `Modulemembers INNER JOIN ${resolvedTable} ON Modulemembers.ModulememberModuleID=Modules.ModuleID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE ModulememberUserID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE ModuleID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
