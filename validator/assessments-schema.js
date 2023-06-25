import joi from "joi";

const schema = {};

schema.mutableFields = [
  "AssessmentName",
  "AssessmentModuleID",
  "AssessmentPublishdate",
  "AssessmentSubmissiondate",
  "AssessmentFeedbackdate",
  "AssessmentBriefURL",
];

schema.id = joi.number().integer().min(1);

schema.record = joi
  .object({
    AssessmentID: joi.number().integer(),
    AssessmentName: joi.string().min(8),
    AssessmentModuleID: joi.number().integer(),
    AssessmentPublishdate: joi.date(),
    AssessmentSubmissiondate: joi.date(),
    AssessmentFeedbackdate: joi.date(),
    AssessmentBriefURL: joi.string().uri(),
  })
  .required()
  .unknown(true);

export default schema;
