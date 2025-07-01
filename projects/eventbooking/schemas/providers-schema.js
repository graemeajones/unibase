import joi from 'joi';

const schema = {};

schema.requiredFields = ['ProviderName'];

schema.record = joi
  .object({
    ProviderID: joi.number().integer().min(1).allow(null),
    ProviderName: joi.string().min(8),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
