import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'ClassTitle',
  'ClassCourseID',
  'ClassDay',
  'ClassTime',
  'ClassDuration',
  'ClassLocationID',
  'ClassCapacity',
  'ClassInstructorID',
];

schema.record = joi
  .object({
    ClassID: joi.number().integer().min(1).allow(null),
    ClassCourseID: joi.number().integer().min(1).allow(null),
    ClassTitle: joi.string().min(8),
    ClassDay: joiValidDateString,
    ClassTime: joi.string().regex(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$$/),
    ClassDuration: joi.number().integer().min(1),
    ClassLocationID: joi.number().integer().min(1).allow(null),
    ClassCapacity: joi.number().integer().min(1),
    ClassInstructorID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  ClassDay: (value) => (value === null ? null : new Date(value)),
};

export default schema;
