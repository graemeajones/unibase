import joi from "joi";
import { joiValidDateString } from "./utils.js";

const schema = {};

schema.mutableFields = [
  "AssessmentName",
  "AssessmentPercentage",
  "AssessmentPublishdate",
  "AssessmentSubmissiondate",
  "AssessmentFeedbackdate",
  "AssessmentBriefURL",
  "AssessmentModuleID",
  "AssessmentAssessmenttypeID",
];

schema.record = joi
  .object({
    AssessmentID: joi.number().integer().min(1).allow(null),
    AssessmentName: joi.string().min(8),
    AssessmentPercentage: joi.number().integer().min(1).max(100),
    AssessmentPublishdate: joiValidDateString,
    AssessmentSubmissiondate: joiValidDateString.allow(null),
    AssessmentFeedbackdate: joiValidDateString.allow(null),
    AssessmentBriefURL: joi.string().uri(),
    AssessmentModuleID: joi.number().integer().min(1).allow(null),
    AssessmentAssessmenttypeID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

export default schema;
