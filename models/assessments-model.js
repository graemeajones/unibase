import { parseRequestQuery, constructPreparedStatement } from './utils.js';

const model = {
  table: 'Assessments',
  idField: 'AssessmentID',
  mutableFields: [
    'AssessmentName',
    'AssessmentPercentage',
    'AssessmentPublishdate',
    'AssessmentSubmissiondate',
    'AssessmentFeedbackdate',
    'AssessmentBriefURL',
    'AssessmentModuleID',
    'AssessmentAssessmenttypeID',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = `((Assessments LEFT JOIN Assessmenttypes ON AssessmentAssessmenttypeID=AssessmenttypeID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'CONCAT(ModuleCode, " ", ModuleName) AS AssessmentModuleName',
      'AssessmenttypeDescription AS AssessmentAssessmenttypeDescription',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'AssessmentModuleName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'leader':
        where = 'ModuleLeaderID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'module':
        where = 'AssessmentModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        table = `${table} INNER JOIN Modulemembers ON AssessmentModuleID=ModulememberModuleID`;
        where = 'ModulememberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'AssessmentID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
