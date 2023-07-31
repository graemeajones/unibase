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
  // Resolve Foreign Keys -------------------
  const resolvedTable = `((Assessments LEFT JOIN Assessmenttypes ON AssessmentAssessmenttypeID=AssessmenttypeID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)`;
  const resolvedFields = [
    model.idField,
    ...model.mutableFields,
    'CONCAT(ModuleCode, " ", ModuleName) AS AssessmentModuleName',
    'AssessmenttypeDescription AS AssessmentAssessmenttypeDescription',
  ];

  // Process request queries ----------------
  const orderableFields = [...model.mutableFields, 'AssessmentModuleName'];
  let orderField = 'ORDER BY AssessmentModuleName,AssessmentPublishdate,AssessmentName';
  for (const key in req.query)
    switch (key) {
      case 'orderby':
        req.query.orderby
          .split(/[ ,]+/)
          .filter((field) => !['asc', 'ASC', 'desc', 'DESC'].includes(field))
          .every((field) => orderableFields.includes(field))
          ? (orderField = `ORDER BY ${req.query.orderby}`)
          : console.warn(
              `[buildReadQuery] The 'orderby' argument "${req.query.orderby}" should only contain fields from the list "${orderableFields}"`
            );
        break;
    }

  // Generate SQL object --------------------
  let sql = '';
  let data = {};
  switch (variant) {
    case 'module':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE AssessmentModuleID=:ID`;
      data = { ID: req.params.id };
      break;
    case 'leader':
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable} WHERE ModuleLeaderID=:ID`;
      data = { ID: req.params.id };
      break;
    default:
      sql = `SELECT ${resolvedFields} FROM ${resolvedTable}`;
      if (req.params.id) {
        sql += ` WHERE AssessmentID=:ID`;
        data = { ID: req.params.id };
      }
  }
  sql = `${sql} ${orderField}`;

  return { sql, data };
};

export default model;
