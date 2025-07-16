import joi from 'joi';

const schema = {};

schema.requiredFields = ['TaskstatusID', 'TaskstatusName'];

schema.record = joi
  .object({
    TaskstatusID: joi.number().integer().min(1).allow(null),
    TaskstatusName: joi.string().min(6),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
