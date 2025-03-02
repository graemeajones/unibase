import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Modules',
  idField: 'ModuleID',
  mutableFields: [
    'ModuleName',
    'ModuleCode',
    'ModuleLevel',
    'ModuleYearID',
    'ModuleLeaderID',
    'ModuleImageURL',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table =
      '((Modules LEFT JOIN Users ON ModuleLeaderID=UserID) LEFT JOIN Years ON ModuleYearID=YearID )';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'CONCAT(UserFirstname," ",UserLastname) AS ModuleLeaderName',
      'YearName AS ModuleYearName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ModuleLeaderName', 'ModuleYearName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'leader':
        where = 'ModuleLeaderID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        table = `Modulemembers INNER JOIN ${table} ON Modulemembers.ModulememberModuleID=Modules.ModuleID`;
        where = 'ModulememberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
