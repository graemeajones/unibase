import joi from 'joi';
import { joiValidGPS } from '#root/validator/utils.js';

const schema = {};

schema.requiredFields = [
  'UserFirstname',
  'UserLastname',
  'UserPhone',
  'UserUsername',
  'UserPassword',
  'UserLatitude',
  'UserLongitude',
  'UserTimestamp',
  'UserImageURL',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserPhone: joi.string().min(12),
    UserUsername: joi.string().min(8),
    UserPassword: joi.string().min(8).max(255),
    UserLatitude: joiValidGPS.latitude,
    UserLongitude: joiValidGPS.longitude,
    UserTimestamp: joiValidGPS.timestamp,
    UserImageURL: joi.string().uri(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
