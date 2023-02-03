import joi from 'joi';

const schema = {};

schema.mutableFields = ['ModulememberModuleID', 'ModulememberUserID'];
schema.id = joi.number().integer().min(1);
schema.record = joi.object({
  ModulememberID: joi.number().integer(), 
  ModulememberModuleID: joi.number().integer(),
  ModulememberUserID: joi.number().integer()
}).required().unknown(true);

export default schema;
