import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Likes',
  idField: 'LikeID',
  mutableFields: ['LikerID', 'LikeeID', 'LikeAffinityID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = '(Likes INNER JOIN Affinities ON LikeAffinityID=AffinityID)';
    let fields = [model.idField, ...model.mutableFields, 'AffinityName AS LikeAffinityName'];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'LikeAffinityID', 'LikeAffinityName'];
    const defaultOrdering = ['LikerID', 'LikeAffinityName DESC', 'LikeeID'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'likedby':
        where = 'LikerID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'wholikes':
        where = 'LikeeID =:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'LikeID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
