const model = {};

model.table = 'Likes';
model.idField = 'LikeID';
model.mutableFields = ['LikerID', 'LikeeID', 'LikeAffinityID'];

model.buildReadQuery = (variant, ids) => {
  const resolvedTable = '(Likes INNER JOIN Affinities ON LikeAffinityID=AffinityID)';
  const resolvedFields = [model.idField, ...model.mutableFields, 'AffinityName AS LikeAffinityName'];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'likedby':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikerID=:ID`;
      data = { ID: ids['liker'] };
      break;
    case 'wholike':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikeeID=:ID`;
      data = { ID: ids['likee'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE LikeID=:ID`;
        data = { ID: ids['likes'] };
      }
  }
  sql += ' ORDER BY AffinityID';

  return { sql, data };
};

export default model;
