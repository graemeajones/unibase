import joi from 'joi';

const schema = {};

schema.requiredFields = ['MydutyUserID', 'MydutyDutyID', 'MydutyName'];

schema.record = joi
  .object({
    MydutyID: joi.number().integer().min(1).allow(null),
    MydutyUserID: joi.number().integer().min(1),
    MydutyDutyID: joi.number().integer().min(1),
    MydutyName: joi.string().max(128).min(5),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
