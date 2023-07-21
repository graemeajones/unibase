import joi from 'joi';

const schema = {};

schema.mutableFields = [
  'ModuleName',
  'ModuleCode',
  'ModuleLevel',
  'ModuleYearID',
  'ModuleLeaderID',
  'ModuleImageURL',
];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    ModuleID: joi.number().integer().min(1).allow(null),
    ModuleName: joi.string().min(8),
    ModuleCode: joi.string().regex(/^\D{2}\d{4}$/, 'module code'),
    ModuleLevel: joi.number().integer().min(3).max(7),
    ModuleYearID: joi.number().integer().min(1).allow(null),
    ModuleLeaderID: joi.number().integer().min(1).allow(null),
    ModuleImageURL: joi.string().uri(),
  })
  .required()
  .unknown(true);

export default schema;
