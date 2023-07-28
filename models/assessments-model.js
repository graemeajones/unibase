const model = {};

model.table = 'Assessments';
model.idField = 'AssessmentID';
model.mutableFields = [
  'AssessmentName',
  'AssessmentPublishdate',
  'AssessmentSubmissiondate',
  'AssessmentFeedbackdate',
  'AssessmentBriefURL',
  'AssessmentModuleID',
  'AssessmentAssessmentTypeID',
];

model.buildReadQuery = (req, variant) => {
  const resolvedTable = `((Assessments LEFT JOIN Assessmenttypes ON AssessmentAssessmenttypeID=AssessmenttypeID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(ModuleCode, " ", ModuleName) AS AssessmentModuleName',
    'AssessmenttypeDescription AS AssessmentAssessmenttypeDescription',
  ];

  let sql = '';
  let data = {};

  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE AssessmentModuleID=:ID`;
      data = { ID: req.params.id };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (req.params.id) {
        sql += ` WHERE AssessmentID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
