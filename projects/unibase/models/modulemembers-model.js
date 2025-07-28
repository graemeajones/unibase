import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Modulemembers',
  idField: 'ModulememberID',
  mutableFields: ['ModulememberUserID', 'ModulememberModuleID', 'ModulememberWorkshopID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table = `((((Modulemembers 
           INNER JOIN Users ON ModulememberUserID=UserID) 
           LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )
           INNER JOIN Modules ON ModulememberModuleID=ModuleID ) 
           LEFT JOIN Workshops ON ModulememberWorkshopID=WorkshopID )`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'CONCAT(UserFirstname," ",UserLastname, " (", UsertypeName, ")") AS ModulememberUserName',
      'CONCAT(ModuleCode," ",ModuleName) AS ModulememberModuleName',
      'WorkshopName AS ModulememberWorkshopName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'ModulememberUserName',
      'ModulememberModuleName',
      'ModulememberWorkshopName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'user':
        where = 'ModulememberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'module':
        where = 'ModulememberModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'workshop':
        where = 'ModulememberWorkshopID=:ID';
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
