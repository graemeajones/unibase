import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Completion',
  idField: 'CompletionID',
  mutableFields: ['CompletionName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = model.table;
    let fields = [model.idField, ...model.mutableFields];

    // Resolve foreign keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'CompletionID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
