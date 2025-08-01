import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Orders',
  idField: 'OrderID',
  mutableFields: ['OrderUserID', 'OrderProductID', 'OrderAcquired'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table =
      '((Orders INNER JOIN Users ON OrderUserID=UserID ) INNER JOIN Products ON OrderProductID=ProductID )';
    let fields = [
      model.idField,
      'CONCAT(UserLastname,", ",UserFirstname) AS OrderUserName',
      'ProductName AS OrderProductName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'OrderUserName',
      'OrderProductName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'user':
        where = 'OrderUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'OrderID=:ID';
        parameters = { ID: parseInt(req.params.id) };
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
