import joi from 'joi';

const schema = {};

schema.requiredFields = ['AttendeeUserID', 'AttendeeEventID', 'AttendeeStatusID'];

schema.record = joi
  .object({
    AttendeeID: joi.number().integer().min(1).allow(null),
    AttendeeUserID: joi.number().integer().min(1),
    AttendeeEventID: joi.number().integer().min(1),
    AttendeeStatusID: joi.number().integer().min(1).allow(null),
    AttendeeTable: joi.number().integer().min(1),
    AttendeeSeat: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
