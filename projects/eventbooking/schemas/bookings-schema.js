import joi from 'joi';
import { joiValidDateString } from '../../../validator/utils.js';

const schema = {};

schema.mutableFields = [
  'BookingUserID',
  'BookingClassID',
  'BookingBookingdate',
  'BookingBookingstatusID',
];

schema.record = joi
  .object({
    BookingID: joi.number().integer().min(1).allow(null),
    BookingUserID: joi.number().integer().min(1).allow(null),
    BookingClassID: joi.number().integer().min(1).allow(null),
    BookingBookingdate: joiValidDateString,
    BookingBookingstatusID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  BookingBookingdate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
