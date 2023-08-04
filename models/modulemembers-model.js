import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Modulemembers',
  idField: 'ModulememberID',
  mutableFields: ['ModulememberModuleID', 'ModulememberUserID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table =
      '(((Modulemembers LEFT JOIN Users ON ModulememberUserID=UserID) LEFT JOIN Modules ON ModulememberModuleID=ModuleID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'CONCAT(ModuleCode," ",ModuleName) AS ModulememberModuleName',
      'CONCAT(UserFirstname," ",UserLastname, " (", UsertypeName, ")") AS ModulememberUserName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ModulememberModuleName', 'ModulememberUserName'];
    const defaultOrdering = ['ModulememberModuleName', 'ModulememberUserName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'module':
        where = 'ModulememberModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'user':
        where = 'ModulememberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ModulememberID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
