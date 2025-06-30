import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Tasks',
  idField: 'TaskID',
  mutableFields: [
    'TaskName',
    'TaskDescription',
    'TaskStart',
    'TaskEnd',
    'TaskImportance',
    'TaskDifficulty',
    'TaskPetID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Pets ON TaskPetID=PetID)`;
    fields = [...fields, 'PetName AS TaskPetName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'TaskPetName'];
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
        where = 'TaskPetID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'TaskID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
