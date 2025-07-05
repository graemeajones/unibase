import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'ModuleCode',
  'ModuleName',
  'ModuleImageURL',
  'ModuleLeaderID',
  'ModuleLevel',
  'ModuleCredits',
  'ModuleSize',
  'ModuleEffort',
];

schema.record = joi
  .object({
    ModuleID: joi.number().integer().min(1).allow(null),
    ModuleCode: joi.string().regex(/^\D{2}\d{4}$/, 'module code'),
    ModuleName: joi.string().min(8),
    ModuleImageURL: joi.string().uri(),
    ModuleLeaderID: joi.number().integer().min(1).allow(null),
    ModuleLevel: joi.number().integer().min(3).max(7),
    ModuleCredits: joi.number().integer().min(0),
    ModuleSize: joi.number().integer().min(0),
    ModuleEffort: joi.number().integer().min(0),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
