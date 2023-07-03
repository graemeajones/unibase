const model = {};

model.table = "Assessments";
model.mutableFields = [
  "AssessmentName",
  "AssessmentPublishdate",
  "AssessmentSubmissiondate",
  "AssessmentFeedbackdate",
  "AssessmentBriefURL",
  "AssessmentModuleID",
  "AssessmentAssessmentTypeID",
];
model.idField = "AssessmentID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable = `((Assessments LEFT JOIN Assessmenttypes ON AssessmentAssessmenttypeID=AssessmenttypeID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(ModuleCode, " ", ModuleName) AS AssessmentModuleName',
    "AssessmenttypeDescription",
  ];

  let sql = "";
  switch (variant) {
    case "module":
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE AssessmentModuleID=:ID`;
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (id) sql += ` WHERE AssessmentID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
