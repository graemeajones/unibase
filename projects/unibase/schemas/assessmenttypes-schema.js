import joi from 'joi';

const schema = {};

schema.mutableFields = ['AssessmenttypeCode', 'AssessmenttypeDescription'];

schema.record = joi
  .object({
    AssessmenttypeID: joi.number().integer().min(1).allow(null),
    AssessmenttypeCode: joi.string().min(8),
    AssessmenttypeDescription: joi.string(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
