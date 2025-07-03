import joi from 'joi';

const schema = {};

schema.requiredFields = ['CategoryID', 'CategoryName'];

schema.record = joi
  .object({
    CategoryID: joi.number().integer().min(1).allow(null),
    CategoryName: joi.string().min(6),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
