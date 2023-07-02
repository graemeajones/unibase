const model = {};

model.table = "Groupmembers";
model.mutableFields = ["GroupmemberGroupID", "GroupmemberUserID"];
model.idField = "GroupmemberID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable =
    "(((Groupmembers LEFT JOIN Groups ON GroupmemberGroupID=GroupID ) LEFT JOIN Users ON GroupmemberUserID=UserID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )";
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    "GroupName AS GroupmemberGroupName",
    'CONCAT(UserLastname,", ",UserFirstname, " (", UsertypeName, ")") AS GroupmemberUserName',
  ];

  let sql = "";
  switch (variant) {
    case "group":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE GroupmemberGroupID=:ID`;
      break;
    case "user":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE GroupmemberUserID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE GroupmemberID=:ID`;
  }
  sql += " ORDER BY GroupmemberGroupName, GroupmemberUserName";

  return { sql, data: { ID: id } };
};

export default model;
