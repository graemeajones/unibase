import joi from 'joi';
import { joiValidGPS } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'UserFirstname',
  'UserLastname',
  'UserPhone',
  'UserUsername',
  'UserLatitude',
  'UserLongitude',
  'UserTimestamp',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserPhone: joi.string().min(12),
    UserUsername: joi.string().min(8),
    UserLatitude: joiValidGPS.latitude,
    UserLongitude: joiValidGPS.longitude,
    UserTimestamp: joiValidGPS.timestamp,
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
