import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Projects',
  idField: 'ProjectID',
  mutableFields: [
    'ProjectName',
    'ProjectGroupsize',
    'ProjectStartdate',
    'ProjectMandatory',
    'ProjectProjectstatusID',
    'ProjectModuleID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table = `((Projects LEFT JOIN Projectstatus ON ProjectProjectstatusID=ProjectstatusID) LEFT JOIN Modules ON ProjectModuleID=ModuleID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'ProjectstatusName AS ProjectProjectstatusName',
      'CONCAT(ModuleCode, " ", ModuleName) AS ProjectModuleName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ProjectProjectstatusName', 'ProjectModuleName'];
    const defaultOrdering = ['ProjectProjectstatusID', 'ProjectModuleName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'module':
        where = 'ProjectModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        table = `Modulemembers INNER JOIN ${table} ON Modulemembers.ModulememberModuleID=Modules.ModuleID`;
        where = 'ModulememberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ProjectID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
