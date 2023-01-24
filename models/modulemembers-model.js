const model = {};

model.table = 'Modulemembers';
model.mutableFields = ['ModulememberModuleID', 'ModulememberUserID'];
model.idField = 'ModulememberID';

model.buildReadQuery = (id, variant) => {
  let resolvedTable = '((Modulemembers LEFT JOIN Users ON ModulememberUserID=UserID) LEFT JOIN Modules ON ModulememberModuleID=ModuleID )';
  let resolvedFields = [
    'ModulememberID',
    'ModulememberModuleID', 'CONCAT(ModuleCode," ",ModuleName) AS ModulememberModuleName',
    'ModulememberUserID', 'CONCAT(UserFirstname," ",UserLastname) AS ModulememberUserName'
  ];
  let sql = '';

  switch (variant) {
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE ModulememberID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
