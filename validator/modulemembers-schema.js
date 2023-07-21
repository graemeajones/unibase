import joi from 'joi';

const schema = {};

schema.mutableFields = ['ModulememberModuleID', 'ModulememberUserID'];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    ModulememberID: joi.number().integer().min(1).allow(null),
    ModulememberModuleID: joi.number().integer().min(1),
    ModulememberUserID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

export default schema;
