import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Usertypes',
  idField: 'UsertypeID',
  mutableFields: ['UsertypeName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const table = model.table;
    const fields = [model.idField, ...model.mutableFields];

    // Resolve Foreign Keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'UsertypeID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
