import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Positions',
  idField: 'PositionID',
  mutableFields: [
    'PositionActivityID',
    'PositionLatitude',
    'PositionLongitude',
    'PositionTimestamp',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Activities ON PositionActivityID=ActivityID)`;
    fields = [...fields, 'ActivityName AS PositionActivityName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'activity':
        where = 'PositionActivityID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'PositionID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
