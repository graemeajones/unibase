import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Pets',
  idField: 'PetID',
  mutableFields: [
    'PetName',
    'PetType',
    'PetBreed',
    'PetColour',
    'PetSex',
    'PetAge',
    'PetImageURL',
    'PetOwnerID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Users ON PetOwnerID=UserID)`;
    fields = [...fields, 'CONCAT(UserLastname,", ",UserFirstname) AS PetOwnerName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'PetOwnerName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'users':
        where = 'PetOwnerID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'PetID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
