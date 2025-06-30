import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Events',
  idField: 'EventID',
  mutableFields: ['EventName', 'EventDescription', 'EventStart', 'EventDuration', 'EventPetID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Pets ON EventPetID=PetID)`;
    fields = [...fields, 'PetName AS EventPetName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'EventPetName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'users':
        where = 'PetOwnerID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'pets':
        where = 'EventPetID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'EventID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
