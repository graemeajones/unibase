import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'ContributionLogID',
  'ContributionUserID',
  'ContributionAttendanceID',
  'ContributionCompletionID',
  'ContributionFuturetasks',
];

schema.record = joi
  .object({
    ContributionID: joi.number().integer().min(1).allow(null),
    ContributionLogID: joi.number().integer().min(1),
    ContributionUserID: joi.number().integer().min(1),
    ContributionAttendanceID: joi.number().integer().min(1),
    ContributionCompletionID: joi.number().integer().min(1),
    ContributionFuturetasks: joi.string(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
