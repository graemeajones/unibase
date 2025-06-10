import joi from 'joi';

const schema = {};

schema.mutableFields = ['GenderName'];

schema.record = joi
  .object({
    GenderID: joi.number().integer().min(1).allow(null),
    GenderName: joi.string().min(4),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
