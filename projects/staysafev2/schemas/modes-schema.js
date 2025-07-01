import joi from 'joi';

const schema = {};

schema.requiredFields = ['ModeName'];

schema.record = joi
  .object({
    ModeID: joi.number().integer().min(1).allow(null),
    ModeName: joi.string().min(3),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
