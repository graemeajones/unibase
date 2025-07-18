import joi from 'joi';

const schema = {};

schema.requiredFields = [
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
    BookingBookingdate: joi.date().iso(),
    BookingBookingstatusID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  BookingBookingdate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
