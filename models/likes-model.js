const model = {};

model.table = "Likes";
model.mutableFields = ["LikerID", "LikeeID", "LikeAffinityID"];
model.idField = "LikeID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable =
    "(Likes INNER JOIN Affinities ON LikeAffinityID=AffinityID)";
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    "AffinityName AS LikeAffinityName",
  ];

  let sql = "";
  switch (variant) {
    case "liker":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikerID=:ID`;
      break;
    case "likee":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE LikeeID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE LikeID=:ID`;
  }
  sql += " ORDER BY AffinityID";

  return { sql, data: { ID: id } };
};

export default model;
