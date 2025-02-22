import joi from 'joi';

const schema = {};

schema.mutableFields = ['UserFirstname', 'UserLastname', 'UserPhone', 'UserUsername'];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserPhone: joi.string().min(12),
    UserLastname: joi.string().min(8),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
