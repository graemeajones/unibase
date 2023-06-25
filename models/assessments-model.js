const model = {};

model.table = "Assessments";
model.mutableFields = [
  "AssessmentName",
  "AssessmentModuleID",
  "AssessmentPublishdate",
  "AssessmentSubmissiondate",
  "AssessmentFeedbackdate",
  "AssessmentBriefURL",
];
model.idField = "AssessmentID";

model.buildReadQuery = (id, variant) => {
  const resolvedTable = `(Assessments LEFT JOIN Modules ON AssessmentModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(ModuleCode, " ", ModuleName) AS AssessmentModuleName',
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
