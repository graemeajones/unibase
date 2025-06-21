import joi from 'joi';
import { joiValidISOdatetime } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'TaskName',
  'TaskDescription',
  'TaskStart',
  'TaskEnd',
  'TaskImportance',
  'TaskDifficulty',
  'TaskPetID',
];

schema.record = joi
  .object({
    TaskID: joi.number().integer().min(1).allow(null),
    TaskName: joi.string().min(2),
    TaskDescription: joi.string().min(3),
    TaskStart: joiValidISOdatetime,
    TaskEnd: joiValidISOdatetime,
    TaskImportance: joi.number().integer().min(0),
    TaskDifficulty: joi.number().integer().min(0),
    TaskPetID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  TaskStart: (value) => (value === null ? null : new Date(value)),
  TaskEnd: (value) => (value === null ? null : new Date(value)),
};

export default schema;
