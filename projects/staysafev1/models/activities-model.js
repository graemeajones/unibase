import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Activities',
  idField: 'ActivityID',
  mutableFields: [
    'ActivityName',
    'ActivityUserID',
    'ActivityDescription',
    'ActivityFromID',
    'ActivityLeave',
    'ActivityToID',
    'ActivityArrive',
    'ActivityStatusID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = `((((Activities LEFT JOIN Users ON ActivityUserID=UserID) 
                                LEFT JOIN Locations AS FromLocations ON ActivityFromID=FromLocations.LocationID)
                                LEFT JOIN Locations AS ToLocations ON ActivityToID=ToLocations.LocationID)
                                LEFT JOIN Status ON ActivityStatusID=StatusID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'UserUsername AS ActivityUsername',
      'FromLocations.LocationName AS ActivityFromName',
      'ToLocations.LocationName AS ActivityToName',
      'StatusName AS ActivityStatusName',
    ];

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'users':
        where = 'ActivityUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'ActivityID=:ID';
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
