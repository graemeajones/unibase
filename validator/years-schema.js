import joi from 'joi';

const schema = {};

schema.mutableFields = ['YearName'];

schema.record = joi
  .object({
    YearID: joi.number().integer().min(1).allow(null),
    YearName: joi.string().regex(/^20\d{2}-\d{2}$/, 'year code'),
  })
  .required()
  .unknown(true);

export default schema;
