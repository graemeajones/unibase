import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Contacts',
  idField: 'ContactID',
  mutableFields: [
    'ContactUserID',
    'ContactContactID',
    'ContactLabel',
    'ContactDatecreated',
    'ContactVisibility',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = 'Contacts';
    let fields = [model.idField, ...model.mutableFields];

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ContactID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
