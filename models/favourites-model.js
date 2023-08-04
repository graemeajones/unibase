import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Favourites',
  idField: 'FavouriteID',
  mutableFields: ['FavouriteLikerID', 'FavouriteLikedID', 'FavouriteCategory'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let table = model.table;
    let fields = [model.idField, ...model.mutableFields];

    // Resolve foreign keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = model.mutableFields;
    const defaultOrdering = ['FavouriteCategory', 'FavouriteLikerID', 'FavouriteLikedID'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'users':
        where = 'FavouriteLikerID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'FavouriteID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
