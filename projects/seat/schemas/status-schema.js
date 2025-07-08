import joi from 'joi';

const schema = {};

schema.requiredFields = ['StatusName'];

schema.record = joi
  .object({
    StatusID: joi.number().integer().min(1).allow(null),
    StatusName: joi.string().min(2),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
