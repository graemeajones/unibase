import joi from 'joi';

const schema = {};

schema.requiredFields = ['UsertypeID', 'UsertypeName'];

schema.record = joi
  .object({
    UsertypeID: joi.number().integer().min(1).allow(null),
    UsertypeName: joi.string().min(6),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
