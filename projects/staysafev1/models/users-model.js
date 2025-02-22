import { parseRequestQuery, constructPreparedStatement } from '#root/models/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: ['UserFirstname', 'UserLastname', 'UserPhone', 'UserUsername'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve Foreign Keys -------------------
    let table = 'Users';
    let fields = [model.idField, ...model.mutableFields];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'contacts':
        fields = [
          ...fields,
          'ContactID AS UserContactID',
          'ContactLabel AS UserContactLabel',
          'ContactDatecreated AS UserContactDatecreated',
        ];
        table = `Contacts INNER JOIN ${table} ON ContactContactID=Users.UserID`;
        where = 'ContactUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'UserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
