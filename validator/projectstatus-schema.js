import joi from 'joi';

const schema = {};

schema.mutableFields = ['ProjectstatusName'];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    ProjectstatusID: joi.number().integer().min(1).allow(null),
    ProjectstatusName: joi.string().min(2),
  })
  .required()
  .unknown(true);

export default schema;
