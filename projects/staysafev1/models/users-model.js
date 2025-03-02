import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: [
    'UserFirstname',
    'UserLastname',
    'UserPhone',
    'UserUsername',
    'UserPassword',
    'UserLatitude',
    'UserLongitude',
    'UserTimestamp',
    'UserImageURL',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = 'Users';
    let fields = [model.idField, ...model.mutableFields];

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

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'UserContactLabel'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
