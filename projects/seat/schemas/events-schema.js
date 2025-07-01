import joi from 'joi';

const schema = {};

schema.requiredFields = ['EventName', 'EventDescription', 'EventDatetime', 'EventLocationID'];

schema.record = joi
  .object({
    EventID: joi.number().integer().min(1).allow(null),
    EventName: joi.string().min(2),
    EventDescription: joi.string().min(2),
    EventDatetime: joi.date().iso().allow(null),
    EventLocationID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  EventDatetime: (value) => (value === null ? null : new Date(value)),
};

export default schema;
