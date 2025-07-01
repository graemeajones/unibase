import joi from 'joi';

const schema = {};

schema.requiredFields = ['StatusName', 'StatusOrder'];

schema.record = joi
  .object({
    StatusID: joi.number().integer().min(1).allow(null),
    StatusName: joi.string().min(4),
    StatusOrder: joi.number().integer(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
