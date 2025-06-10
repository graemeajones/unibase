import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = ['EventName', 'EventDatetime', 'EventLocationID'];

schema.record = joi
  .object({
    EventID: joi.number().integer().min(1).allow(null),
    EventName: joi.string().min(2),
    EventDatetime: joiValidDateString,
    EventLocationID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  EventDatetime: (value) => (value === null ? null : new Date(value)),
};

export default schema;
