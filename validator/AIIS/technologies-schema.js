import joi from 'joi';

const schema = {};

schema.mutableFields = ['TechnologyName'];

schema.record = joi
  .object({
    TechnologyID: joi.number().integer().min(1).allow(null),
    TechnologyName: joi.string().max(128),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
