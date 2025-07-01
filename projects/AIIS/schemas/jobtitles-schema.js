import joi from 'joi';

const schema = {};

schema.requiredFields = ['JobtitleName'];

schema.record = joi
  .object({
    JobtitleID: joi.number().integer().min(1).allow(null),
    JobtitleName: joi.string().max(128),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
