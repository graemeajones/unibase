import joi from 'joi';
import { joiValidGPS } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'LocationName',
  'LocationDescription',
  'LocationAddress',
  'LocationPostcode',
  'LocationLatitude',
  'LocationLongitude',
];

schema.record = joi
  .object({
    LocationID: joi.number().integer().min(1).allow(null),
    LocationName: joi.string().min(4),
    LocationDescription: joi.string().allow(''),
    LocationAddress: joi.string().min(16),
    LocationPostcode: joi.string().min(6).allow(null),
    LocationLatitude: joiValidGPS.latitude,
    LocationLongitude: joiValidGPS.longitude,
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
