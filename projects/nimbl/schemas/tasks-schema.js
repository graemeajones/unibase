import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'TaskName',
  'TaskDescription',
  'TaskStart',
  'TaskEnd',
  'TaskImportance',
  'TaskDifficulty',
  'TaskPetID',
  'TaskTaskstatusID',
];

schema.record = joi
  .object({
    TaskID: joi.number().integer().min(1).allow(null),
    TaskName: joi.string().min(2),
    TaskDescription: joi.string().min(3),
    TaskStart: joi.date().iso(),
    TaskEnd: joi.date().iso(),
    TaskImportance: joi.number().integer().min(0),
    TaskDifficulty: joi.number().integer().min(0),
    TaskPetID: joi.number().integer().min(1).allow(null),
    TaskTaskstatusID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  TaskStart: (value) => (value === null ? null : new Date(value)),
  TaskEnd: (value) => (value === null ? null : new Date(value)),
};

export default schema;
