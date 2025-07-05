import joi from 'joi';

const schema = {};

schema.requiredFields = ['PositionName'];

schema.record = joi
  .object({
    PositionID: joi.number().integer().min(1).allow(null),
    PositionName: joi.string().min(8),
    PositionOrder: joi.number().integer(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
