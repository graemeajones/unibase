import joi from 'joi';

const schema = {};

schema.requiredFields = ['DutyName', 'DutyEffort', 'DutyInstances'];

schema.record = joi
  .object({
    DutyID: joi.number().integer().min(1).allow(null),
    DutyName: joi.string().min(8),
    DutyEffort: joi.number().integer().min(0),
    DutyInstances: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
