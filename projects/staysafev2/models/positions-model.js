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
    let table = '(Positions LEFT JOIN Activities ON PositionActivityID=ActivityID)';
    let fields = [model.idField, ...model.mutableFields, 'ActivityName AS PositionActivityName'];

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

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
