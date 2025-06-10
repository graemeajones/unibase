import joi from 'joi';

const schema = {};

schema.mutableFields = ['LocationName'];

schema.record = joi
  .object({
    LocationID: joi.number().integer().min(1).allow(null),
    LocationName: joi.string().min(8),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
