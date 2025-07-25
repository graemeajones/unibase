import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Workshops',
  idField: 'WorkshopID',
  mutableFields: ['WorkshopName', 'WorkshopDescription', 'WorkshopModuleID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = '(Workshops INNER JOIN Modules ON WorkshopModuleID=ModuleID)';
    let fields = [model.idField, ...model.mutableFields, 'ModuleName AS WorkshopModuleName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'WorkshopModuleName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'module':
        where = 'WorkshopModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'WorkshopID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
