import joi from 'joi';

const schema = {};

schema.mutableFields = ['CompletionName'];

schema.record = joi
  .object({
    CompletionID: joi.number().integer().min(1).allow(null),
    CompletionName: joi.string(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
