import joi from 'joi';

const schema = {};

schema.mutableFields = ['ExperienceName'];

schema.record = joi
  .object({
    ExperienceID: joi.number().integer().min(1).allow(null),
    ExperienceName: joi.string(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
