const model = {};

model.table = 'Users';
model.idField = 'UserID';
model.mutableFields = [
  'UserFirstname',
  'UserLastname',
  'UserEmail',
  'UserRegistered',
  'UserLevel',
  'UserYearID',
  'UserUsertypeID',
  'UserImageURL',
];

model.buildReadQuery = (variant, ids) => {
  const resolvedTable =
    '((Users LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) LEFT JOIN Years ON UserYearID=YearID )';
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'UsertypeName AS UserUsertypeName',
    'YearName AS UserYearName',
  ];
  const orderField = 'ORDER BY UserLastname,UserFirstname,UserEmail';

  let sql = '';
  let data = {};
  const STAFF = 1; // Primary key for staff type in Unibase Usertypes table
  const STUDENT = 2; // Primary key for student type in Unibase Usertypes table
  const LIKE = 1; // Primary key for like type in Unibase Affinities table
  const DISLIKE = 2; // Primary key for dislike type in Unibase Affinities table
  let extendedTable = '';
  let extendedField = '';

  switch (variant) {
    case 'student':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STUDENT}`;
      break;
    case 'staff':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=${STAFF}`;
      break;
    case 'usertype':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE UserUsertypeID=:ID`;
      data = { ID: ids['usertype'] };
      break;
    case 'groups':
      extendedTable = `Groupmembers INNER JOIN ${resolvedTable} ON Groupmembers.GroupmemberUserID=Users.UserID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE GroupmemberGroupID=:ID`;
      data = { ID: ids['groups'] };
      break;
    case 'likes':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      const LikerLikes = `( SELECT * FROM Likes WHERE Likes.LikerID=:ID) AS LikerLikes`;
      extendedTable = `${resolvedTable} LEFT JOIN ${LikerLikes} ON Users.UserID = LikerLikes.LikeeID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE UserUsertypeID=${STUDENT} ${orderField}`;
      data = { ID: ids['likes'] };
      break;
    case 'likedby':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikeeID=Users.UserID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE Likes.LikerID=:ID AND LikeAffinityID=${LIKE}`;
      data = { ID: ids['liker'] };
      break;
    case 'dislikedby':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikeeID=Users.UserID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE Likes.LikerID=:ID  AND LikeAffinityID=${DISLIKE}`;
      data = { ID: ids['liker'] };
      break;
    case 'wholikes':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikerID=Users.UserID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE Likes.LikeeID=:ID AND LikeAffinityID=${LIKE}`;
      data = { ID: ids['likee'] };
      break;
    case 'whodislikes':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      extendedTable = `Likes INNER JOIN ${resolvedTable} ON Likes.LikerID=Users.UserID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE Likes.LikeeID=:ID AND LikeAffinityID=${DISLIKE}`;
      data = { ID: ids['likee'] };
      break;
    case 'modules':
      extendedTable = `Modulemembers INNER JOIN ${resolvedTable} ON Modulemembers.ModulememberUserID=Users.UserID`;
      sql = `SELECT ${resolvedFields} FROM ${extendedTable} WHERE ModulememberModuleID=:ID`;
      data = { ID: ids['modules'] };
      break;
    case 'moduleslikedby':
      extendedField = [...resolvedFields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
      extendedTable = `( Modulemembers INNER JOIN ${resolvedTable} ON Modulemembers.ModulememberUserID=Users.UserID ) LEFT JOIN Likes ON Users.UserID=Likes.LikeeID`;
      sql = `SELECT ${extendedField} FROM ${extendedTable} WHERE ModulememberModuleID=:MID AND Likes.LikerID=:UID AND LikeAffinityID=${LIKE}`;
      data = { MID: ids['modules'], UID: ids['users'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE UserID=:ID`;
        data = { ID: ids['users'] };
      }
  }

  return { sql, data };
};

export default model;
