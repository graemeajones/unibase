import joi from 'joi';

const schema = {};

schema.mutableFields = ['BookingstatusName'];

schema.record = joi
  .object({
    BookingstatusID: joi.number().integer().min(1).allow(null),
    BookingstatusName: joi.string().min(128),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
