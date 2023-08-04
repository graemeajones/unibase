import joi from 'joi';

const schema = {};

schema.mutableFields = [
  'AssessmentName',
  'AssessmentModuleID',
  'AssessmentPublishdate',
  'AssessmentSubmissiondate',
  'AssessmentFeedbackdate',
  'AssessmentBriefURL',
];

schema.record = joi
  .object({
    AssessmentID: joi.number().integer().min(1).allow(null),
    AssessmentName: joi.string().min(8),
    AssessmentModuleID: joi.number().integer().min(1).allow(null),
    AssessmentPublishdate: joi.date(),
    AssessmentSubmissiondate: joi.date().allow(null),
    AssessmentFeedbackdate: joi.date().allow(null),
    AssessmentBriefURL: joi.string().uri(),
  })
  .required()
  .unknown(true);

export default schema;
