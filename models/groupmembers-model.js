import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Groupmembers',
  idField: 'GroupmemberID',
  mutableFields: ['GroupmemberGroupID', 'GroupmemberUserID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table =
      '(((Groupmembers LEFT JOIN Groups ON GroupmemberGroupID=GroupID ) LEFT JOIN Users ON GroupmemberUserID=UserID ) LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID )';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'GroupName AS GroupmemberGroupName',
      'CONCAT(UserLastname,", ",UserFirstname, " (", UsertypeName, ")") AS GroupmemberUserName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'GroupmemberGroupName', 'GroupmemberUserName'];
    const defaultOrdering = ['GroupmemberGroupName', 'GroupmemberUserName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'group':
        where = 'GroupmemberGroupID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'user':
        where = 'GroupmemberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'GroupmemberID=:ID';
        parameters = { ID: parseInt(req.params.id) };
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
