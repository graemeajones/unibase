import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Products',
  idField: 'ProductID',
  mutableFields: [
    'ProductName',
    'ProductDescription',
    'ProductImageURL',
    'ProductCategoryID',
    'ProductGems',
    'ProductCost',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    table = `(${table} LEFT JOIN Categories ON ProductCategoryID=CategoryID)`;
    fields = [...fields, 'CategoryName AS ProductCategoryName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ProductCategoryName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ProductID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
