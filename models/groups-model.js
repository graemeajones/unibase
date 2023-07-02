const model = {};

model.table = "Groups";
model.mutableFields = ["GroupName", "GroupProjectID"];
model.idField = "GroupID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable =
    "((Groups LEFT JOIN Projects ON GroupProjectID=ProjectID) LEFT JOIN Modules ON ProjectModuleID=ModuleID)";
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    "ProjectName AS GroupProjectName",
    "ModuleID AS GroupProjectModuleID",
    "ModuleName AS GroupProjectModuleName",
  ];

  let sql = "";
  switch (variant) {
    case "project":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ProjectID=:ID`;
      break;
    case "users":
      const extendedTable = `Groupmembers INNER JOIN ${resolvedTable} ON Groupmembers.GroupmemberGroupID=Groups.GroupID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE GroupmemberUserID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE GroupID=:ID`;
  }
  sql += " ORDER BY GroupName";

  return { sql, data: { ID: id } };
};

export default model;
