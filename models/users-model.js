const model = {};

model.table = 'Users';
model.mutableFields = ['UserFirstname', 'UserLastname', 'UserEmail', 'UserLevel', 'UserYearID', 'UserUsertypeID', 'UserImageURL'];
model.idField = 'UserID';

model.buildReadQuery = (id, variant) => {
  const resolvedTable = '((Users LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) LEFT JOIN Years ON UserYearID=YearID )';
  const resolvedFields = [model.idField, ...model.mutableFields, 'UsertypeName AS UserUsertypeName', 'YearName AS UserYearName'];

  let sql = '';
  const STAFF = 1; // Primary key for staff type in Unibase Usertypes table
  const STUDENT = 2; // Primary key for student type in Unibase Usertypes table

  switch (variant) {
    case 'student':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STUDENT}`;
      break;
    case 'staff':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STAFF}`;
      break;
    case 'groups':
      extendedTable = `Groupmembers INNER JOIN ${resolvedTable} ON Groupmembers.GroupmemberUserID=Users.UserID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE GroupmemberGroupID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE UserID=:ID`;
  }
  
  return { sql, data: { ID: id } };
};

export default model;
