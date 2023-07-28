const model = {};

model.table = 'Likes';
model.idField = 'LikeID';
model.mutableFields = ['LikerID', 'LikeeID', 'LikeAffinityID'];

model.buildReadQuery = (req, variant) => {
  const resolvedTable = '(Likes INNER JOIN Affinities ON LikeAffinityID=AffinityID)';
  const resolvedFields = [model.idField, ...model.mutableFields, 'AffinityName AS LikeAffinityName'];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'likedby':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikerID=:ID`;
      data = { ID: req.params.id };
      break;
    case 'wholike':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikeeID=:ID`;
      data = { ID: req.params.id };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (req.params.id) {
        sql += ` WHERE LikeID=:ID`;
        data = { ID: req.params.id };
      }
  }
  sql += ' ORDER BY AffinityID';

  return { sql, data };
};

export default model;
