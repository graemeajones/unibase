const model = {};

model.table = 'Modulemembers';
model.mutableFields = ['ModulememberModuleID', 'ModulememberUserID'];
model.idField = 'ModulememberID';

model.buildReadQuery = (id, variant) => {
  const resolvedTable = '(((Modulemembers LEFT JOIN Users ON ModulememberUserID=UserID) LEFT JOIN Modules ON ModulememberModuleID=ModuleID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )';
  const resolvedFields = [model.idField, ...model.mutableFields,
    'CONCAT(ModuleCode," ",ModuleName) AS ModulememberModuleName',
    'CONCAT(UserFirstname," ",UserLastname, " (", UsertypeName, ")") AS ModulememberUserName'
  ];

  let sql = '';
  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModulememberModuleID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE ModulememberID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
