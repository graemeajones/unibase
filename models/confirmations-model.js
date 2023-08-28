import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Confirmations',
  idField: 'ConfirmationID',
  mutableFields: ['ConfirmationName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = model.table;
    let fields = [model.idField, ...model.mutableFields];

    // Resolve Foreign Keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ConfirmationID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
