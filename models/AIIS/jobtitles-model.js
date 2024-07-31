import { parseRequestQuery, constructPreparedStatement } from '../utils.js';

const model = {
  table: 'Jobtitles',
  idField: 'JobtitleID',
  mutableFields: ['JobtitleName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const table = model.table;
    const fields = [model.idField, ...model.mutableFields];

    // Resolve foreign keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'JobtitleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
