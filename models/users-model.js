const model = {};

model.table = "Users";
model.mutableFields = [
  "UserFirstname",
  "UserLastname",
  "UserEmail",
  "UserRegistered",
  "UserLevel",
  "UserYearID",
  "UserUsertypeID",
  "UserImageURL",
];
model.idField = "UserID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable =
    "((Users LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) LEFT JOIN Years ON UserYearID=YearID )";
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    "UsertypeName AS UserUsertypeName",
    "YearName AS UserYearName",
  ];

  let sql = "";
  const STAFF = 1; // Primary key for staff type in Unibase Usertypes table
  const STUDENT = 2; // Primary key for student type in Unibase Usertypes table

  switch (variant) {
    case "student":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STUDENT}`;
      break;
    case "staff":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STAFF}`;
      break;
    case "usertype":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=:ID`;
      break;
    case "groups":
      {
        const extendedTable = `Groupmembers INNER JOIN ${resolvedTable} ON Groupmembers.GroupmemberUserID=Users.UserID`;
        sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE GroupmemberGroupID=:ID`;
      }
      break;
    case "modules":
      {
        const extendedTable = `Modulemembers INNER JOIN ${resolvedTable} ON Modulemembers.ModulememberUserID=Users.UserID`;
        sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE ModulememberModuleID=:ID`;
      }
      break;
    case "likedby":
      {
        const extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikeeID=Users.UserID`;
        sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE Likes.LikerID=:ID`;
      }
      break;
    case "wholike":
      {
        const extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikerID=Users.UserID`;
        sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE Likes.LikeeID=:ID`;
      }
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE UserID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
