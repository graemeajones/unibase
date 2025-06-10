import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Events',
  idField: 'EventID',
  mutableFields: ['EventName', 'EventDescription', 'EventDatetime', 'EventLocationID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Locations ON EventLocationID=LocationID)`;
    fields = [...fields, 'LocationName AS EventLocationName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'EventLocationName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'EventID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
