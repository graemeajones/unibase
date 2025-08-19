import joi from 'joi';

const schema = {};

schema.requiredFields = ['AgegroupName', 'AgegroupOrder'];

schema.record = joi
  .object({
    AgegroupID: joi.number().integer().min(1).allow(null),
    AgegroupName: joi.string().min(2),
    AgegroupOrder: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
