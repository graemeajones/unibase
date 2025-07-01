import joi from 'joi';

const schema = {};

schema.requiredFields = ['GroupName', 'GroupAssessmentID'];

schema.record = joi
  .object({
    GroupID: joi.number().integer().min(1).allow(null),
    GroupName: joi.string().min(8),
    GroupAssessmentID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
