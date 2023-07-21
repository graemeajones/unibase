import joi from 'joi';

const schema = {};

schema.mutableFields = ['UsertypeName'];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    UsertypeID: joi.number().integer().min(1).allow(null),
    UsertypeName: joi.string(),
  })
  .required()
  .unknown(true);

export default schema;
