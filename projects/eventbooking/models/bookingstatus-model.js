import { parseRequestQuery, constructPreparedStatement } from '../../../models/utils.js';

const model = {
  table: 'Bookingstatus',
  idField: 'BookingstatusID',
  mutableFields: ['BookingstatusName'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table = `Bookingstatus`;
    let fields = [model.idField, ...model.mutableFields];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'BookingstatusID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
