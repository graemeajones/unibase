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

model.buildReadQuery = (variant, ids) => {
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
      data = { ID: ids['module'] };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (ids) {
        sql += ` WHERE AssessmentID=:ID`;
        data = { ID: ids['assessments'] };
      }
  }

  return { sql, data };
};

export default model;
