import joi from 'joi';

const schema = {};

schema.mutableFields = ['ConfirmationName'];

schema.record = joi
  .object({
    ConfirmationID: joi.number().integer().min(1).allow(null),
    ConfirmationName: joi.string().min(2),
  })
  .required()
  .unknown(true);

export default schema;
