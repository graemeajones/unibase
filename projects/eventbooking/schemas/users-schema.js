import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'UserFirstname',
  'UserLastname',
  'UserEmail',
  'UserPhone',
  'UserDatejoined',
  'UserDateofbirth',
  'UserGenderID',
  'UserUsertypeID',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserEmail: joi.string().email(),
    UserPhone: joi.string().min(12),
    UserDatejoined: joiValidDateString,
    UserDateofbirth: joiValidDateString,
    UserGenderID: joi.number().integer().min(1).allow(null),
    UserUsertypeID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  UserDatejoined: (value) => (value === null ? null : new Date(value)),
  UserDateofbirth: (value) => (value === null ? null : new Date(value)),
};

export default schema;
