import joi from 'joi';
import { joiValidISOdatetime } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'ProjectName',
  'ProjectGroupsize',
  'ProjectStartdate',
  'ProjectProjectstatusID',
  'ProjectModuleID',
];

schema.record = joi
  .object({
    ProjectID: joi.number().integer().min(1).allow(null),
    ProjectName: joi.string().min(8),
    ProjectGroupsize: joi.number().integer().min(2),
    ProjectStartdate: joiValidISOdatetime,
    ProjectProjectstatusID: joi.number().integer().min(1).allow(null),
    ProjectModuleID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  ProjectStartdate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
