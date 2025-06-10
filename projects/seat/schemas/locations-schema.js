import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'LocationName',
  'LocationPostcode',
  'LocationAddressline1',
  'LocationAddressline2',
  'LocationAddressline3',
  'LocationAddressline4',
];

schema.record = joi
  .object({
    LocationID: joi.number().integer().min(1).allow(null),
    LocationName: joi.string().min(2),
    LocationPostcode: joi.string().min(2),
    LocationAddressline1: joi.string().min(1),
    LocationAddressline2: joi.string().min(1),
    LocationAddressline3: joi.string().allow(''),
    LocationAddressline4: joi.string().allow(''),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
