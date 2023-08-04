import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Users',
  idField: 'UserID',
  mutableFields: [
    'UserFirstname',
    'UserLastname',
    'UserEmail',
    'UserRegistered',
    'UserLevel',
    'UserYearID',
    'UserUsertypeID',
    'UserImageURL',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    const STAFF = 1; // Primary key for staff type in Unibase Usertypes table
    const STUDENT = 2; // Primary key for student type in Unibase Usertypes table

    // Resolve Foreign Keys -------------------
    let table = '((Users LEFT JOIN Usertypes ON UserUsertypeID=UsertypeID) LEFT JOIN Years ON UserYearID=YearID )';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'UsertypeName AS UserUsertypeName',
      'YearName AS UserYearName',
    ];

    const allowedQueryFields = [...model.mutableFields, 'UserYearName', 'UserLikeAffinityID', 'UserLikeAffinityName'];
    const defaultOrdering = ['UserLastname', 'UserFirstname', 'UserEmail'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields, defaultOrdering);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'student':
        where = `UserUsertypeID=${STUDENT}`;
        break;
      case 'staff':
        where = `UserUsertypeID=${STAFF}`;
        break;
      case 'usertype':
        where = 'UserUsertypeID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'groups':
        table = `Groupmembers INNER JOIN ${table} ON Groupmembers.GroupmemberUserID=Users.UserID`;
        where = 'GroupmemberGroupID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'likes':
        fields = [
          ...fields,
          'LikeID AS UserLikeID',
          'LikeAffinityID AS UserLikeAffinityID',
          'AffinityName AS UserLikeAffinityName',
        ];
        const LikerLikes = `(SELECT * FROM Likes INNER JOIN Affinities ON LikeAffinityID=AffinityID WHERE Likes.LikerID=:ID) AS LikerLikes`;
        table = `${table} LEFT JOIN ${LikerLikes} ON Users.UserID = LikerLikes.LikeeID`;
        where = `UserUsertypeID=${STUDENT}`;
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'likedby':
        fields = [
          ...fields,
          'LikeID AS UserLikeID',
          'LikeAffinityID AS UserLikeAffinityID',
          'AffinityName AS UserLikeAffinityName',
        ];
        table = `(${table} INNER JOIN Likes ON UserID=LikeeID) INNER JOIN Affinities ON LikeAffinityID=AffinityID`;
        where = `Likes.LikerID=:ID`;
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'wholike':
        fields = [
          ...fields,
          'LikeID AS UserLikeID',
          'LikeAffinityID AS UserLikeAffinityID',
          'AffinityName AS UserLikeAffinityName',
        ];
        table = `(${table} INNER JOIN Likes ON UserID=LikerID) INNER JOIN Affinities ON LikeAffinityID=AffinityID`;
        where = `Likes.LikeeID=:ID`;
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'modules':
        table = `Modulemembers INNER JOIN ${table} ON Modulemembers.ModulememberUserID=Users.UserID`;
        where = 'ModulememberModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'moduleslikedby':
        fields = [...fields, 'LikeID AS UserLikeID', 'LikeAffinityID AS UserLikeAffinityID'];
        table = `( Modulemembers INNER JOIN ${table} ON Modulemembers.ModulememberUserID=Users.UserID ) LEFT JOIN Likes ON Users.UserID=Likes.LikeeID`;
        where = `ModulememberModuleID=:MID AND Likes.LikerID=:UID`;
        parameters = { MID: parseInt(req.params.mid), UID: parseInt(req.params.uid) };
        break;
      case 'primary':
        where = 'UserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
