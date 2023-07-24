const model = {};

model.table = 'Groupmembers';
model.idField = 'GroupmemberID';
model.mutableFields = ['GroupmemberGroupID', 'GroupmemberUserID'];

model.buildReadQuery = (variant, ids) => {
  const resolvedTable =
    '(((Groupmembers LEFT JOIN Groups ON GroupmemberGroupID=GroupID ) LEFT JOIN Users ON GroupmemberUserID=UserID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )';
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'GroupName AS GroupmemberGroupName',
    'CONCAT(UserLastname,", ",UserFirstname, " (", UsertypeName, ")") AS GroupmemberUserName',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'group':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE GroupmemberGroupID=:ID`;
      data = { ID: ids['group'] };
      break;
    case 'user':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE GroupmemberUserID=:ID`;
      data = { ID: ids['user'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE GroupmemberID=:ID`;
        data = { ID: ids['groupmembers'] };
      }
  }
  sql += ' ORDER BY GroupmemberGroupName, GroupmemberUserName';

  return { sql, data };
};

export default model;
