import joi from 'joi';

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
    EventStart: joi.date().iso(),
    EventDuration: joi.number().integer().min(1),
    EventPetID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  EventStart: (value) => (value === null ? null : new Date(value)),
};

export default schema;
