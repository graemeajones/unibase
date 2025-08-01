import joi from 'joi';

const schema = {};

schema.requiredFields = ['OrderUserID', 'OrderProductID','OrderAcquired'];

schema.record = joi
  .object({
    OrderID: joi.number().integer().min(1).allow(null),
    OrderUserID: joi.number().integer().min(1),
    OrderProductID: joi.number().integer().min(1),
    OrderAcquired: joi.date().iso(),
  })
  .required()
  .unknown(true);

schema.conformor = {
  OrderAcquired: (value) => (value === null ? null : new Date(value))
};

export default schema;
