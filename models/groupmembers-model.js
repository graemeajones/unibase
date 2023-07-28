const model = {};

model.table = 'Groupmembers';
model.idField = 'GroupmemberID';
model.mutableFields = ['GroupmemberGroupID', 'GroupmemberUserID'];

model.buildReadQuery = (req, variant) => {
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
      data = { ID: req.params.id };
      break;
    case 'user':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE GroupmemberUserID=:ID`;
      data = { ID: req.params.id };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (req.params.id) {
        sql += ` WHERE GroupmemberID=:ID`;
        data = { ID: req.params.id };
      }
  }
  sql += ' ORDER BY GroupmemberGroupName, GroupmemberUserName';

  return { sql, data };
};

export default model;
