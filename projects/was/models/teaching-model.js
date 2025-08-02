import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Teaching',
  idField: 'TeachingID',
  mutableFields: [
    'TeachingUserID',
    'TeachingModuleID',
    'TeachingLeading',
    'TeachingLecturing',
    'TeachingWorkshops',
    'TeachingAssessing',
    'TeachingModeration',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `((${table} INNER JOIN Users ON TeachingUserID=UserID) 
                        INNER JOIN Modules ON TeachingModuleID=ModuleID)`;
    fields = [
      ...fields,
      'CONCAT(UserLastname, ", ", UserFirstname) AS TeachingUserName',
      'ModuleName AS TeachingModuleName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'TeachingUserName', 'TeachingModuleName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'TeachingID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        where = 'TeachingUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'modules':
        where = 'TeachingModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
