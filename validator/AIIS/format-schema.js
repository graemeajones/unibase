import joi from 'joi';

const schema = {};

schema.mutableFields = ['FormatName'];

schema.record = joi
  .object({
    FormatID: joi.number().integer().min(1).allow(null),
    FormatName: joi.string().max(128),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
