import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'TeachingUserID',
  'TeachingModuleID',
  'TeachingLeading',
  'TeachingLecturing',
  'TeachingWorkshops',
  'TeachingAssessing',
  'TeachingModeration',
];

schema.record = joi
  .object({
    TeachingID: joi.number().integer().min(1).allow(null),
    TeachingUserID: joi.number().integer().min(1),
    TeachingModuleID: joi.number().integer().min(1),
    TeachingLeading: joi.number().max(100).min(0),
    TeachingLecturing: joi.number().max(100).min(0),
    TeachingWorkshops: joi.number().max(100).min(0),
    TeachingAssessing: joi.number().max(100).min(0),
    TeachingModeration: joi.boolean(),
  })
  .required()
  .unknown(true);

schema.conformor = {
  TeachingModeration: (value) => (value ? true : false),
};

export default schema;
