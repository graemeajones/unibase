import joi from 'joi';

const schema = {};

schema.requiredFields = ['ExperienceName'];

schema.record = joi
  .object({
    ExperienceID: joi.number().integer().min(1).allow(null),
    ExperienceName: joi.string().max(128),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
