const model = {};

model.table = 'Modulemembers';
model.idField = 'ModulememberID';
model.mutableFields = ['ModulememberModuleID', 'ModulememberUserID'];

model.buildReadQuery = (variant, ids) => {
  const resolvedTable =
    '(((Modulemembers LEFT JOIN Users ON ModulememberUserID=UserID) LEFT JOIN Modules ON ModulememberModuleID=ModuleID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )';
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(ModuleCode," ",ModuleName) AS ModulememberModuleName',
    'CONCAT(UserFirstname," ",UserLastname, " (", UsertypeName, ")") AS ModulememberUserName',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModulememberModuleID=:ID`;
      data = { ID: ids['module'] };
      break;
    case 'user':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModulememberUserID=:ID`;
      data = { ID: ids['user'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE ModulememberID=:ID`;
        data = { ID: ids['modulemembers'] };
      }
  }
  sql += ' ORDER BY ModulememberModuleName, UserLastname, UserFirstname';

  return { sql, data };
};

export default model;
