import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'AssessmentName',
  'AssessmentPercentage',
  'AssessmentPublishdate',
  'AssessmentProposaldeadline',
  'AssessmentSubmissiondate',
  'AssessmentFeedbackdate',
  'AssessmentBriefURL',
  'AssessmentModuleID',
  'AssessmentAssessmenttypeID',
];

schema.record = joi
  .object({
    AssessmentID: joi.number().integer().min(1).allow(null),
    AssessmentName: joi.string().min(8),
    AssessmentPercentage: joi.number().integer().min(1).max(100),
    AssessmentPublishdate: joi.date().iso(),
    AssessmentProposaldeadline: joi.date().iso().allow(null),
    AssessmentSubmissiondate: joi.date().iso().allow(null),
    AssessmentFeedbackdate: joi.date().iso().allow(null),
    AssessmentBriefURL: joi.string().uri(),
    AssessmentModuleID: joi.number().integer().min(1).allow(null),
    AssessmentAssessmenttypeID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  AssessmentPublishdate: (value) => (value === null ? null : new Date(value)),
  AssessmentProposaldeadline: (value) => (value === null ? null : new Date(value)),
  AssessmentSubmissiondate: (value) => (value === null ? null : new Date(value)),
  AssessmentFeedbackdate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
