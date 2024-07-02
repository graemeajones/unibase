import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Contributions',
  idField: 'ContributionID',
  mutableFields: [
    'ContributionLogID',
    'ContributionUserID',
    'ContributionAttendanceID',
    'ContributionCompletionID',
    'ContributionFuturetasks',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = `(((((Contributions INNER JOIN Attendance ON ContributionAttendanceID=AttendanceID)
                                    INNER JOIN Completion ON ContributionCompletionID=CompletionID)
                                    INNER JOIN Logs ON ContributionLogID=LogID)
                                    INNER JOIN Groups ON LogGroupID=GroupID)
                                    INNER JOIN Users ON ContributionUserID=UserID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'AttendanceName AS ContributionAttendanceName',
      'CompletionName AS ContributionCompletionName',
      'LogName AS ContributionLogName',
      'LogGroupID AS ContributionLogGroupID',
      'GroupName AS ContributionLogGroupName',
      "CONCAT(UserLastname,', ',UserFirstname,' (',SUBSTRING(UserEmail,1,8),')') AS ContributionLogUserName",
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'ContributionLogName,ContributionLogGroupName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ContributionID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'log':
        where = 'ContributionLogID =:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'group':
        where = 'LogGroupID =:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
