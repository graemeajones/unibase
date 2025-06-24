import joi from 'joi';
import { joiValidISOdatetime } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'EventName',
  'EventDescription',
  'EventStart',
  'EventDuration',
  'EventPetID',
];

schema.record = joi
  .object({
    EventID: joi.number().integer().min(1).allow(null),
    EventName: joi.string().min(8),
    EventDescription: joi.string().min(8),
    EventStart: joiValidISOdatetime,
    EventDuration: joi.number().integer().min(1),
    EventPetID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
