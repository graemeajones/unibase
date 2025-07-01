import joi from 'joi';

const schema = {};

schema.requiredFields = ['YearName'];

schema.record = joi
  .object({
    YearID: joi.number().integer().min(1).allow(null),
    YearName: joi.string().regex(/^20\d{2}-\d{2}$/, 'year code'),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
