import joi from 'joi';
import { joiValidGPS } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'PositionActivityID',
  'PositionLatitude',
  'PositionLongitude',
  'PositionTimestamp',
];

schema.record = joi
  .object({
    PositionID: joi.number().integer().min(1).allow(null),
    PositionActivityID: joi.number().integer().min(1),
    PositionLatitude: joiValidGPS.latitude,
    PositionLongitude: joiValidGPS.longitude,
    PositionTimestamp: joiValidGPS.timestamp,
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
