import joi from 'joi';

const schema = {};

schema.requiredFields = ['ModulememberModuleID', 'ModulememberUserID'];

schema.record = joi
  .object({
    ModulememberID: joi.number().integer().min(1).allow(null),
    ModulememberModuleID: joi.number().integer().min(1),
    ModulememberUserID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
