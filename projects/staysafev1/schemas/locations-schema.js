import joi from 'joi';
import { joiValidGPS } from '#root/validator/utils.js';

const schema = {};

schema.requiredFields = [
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
    LocationAddress: joi.string().min(4),
    LocationPostcode: joi.string().min(4).allow(null),
    LocationLatitude: joiValidGPS.latitude,
    LocationLongitude: joiValidGPS.longitude,
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
