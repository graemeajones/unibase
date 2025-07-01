import joi from 'joi';

const schema = {};

schema.requiredFields = [
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
    UserDatejoined: joi.date().iso(),
    UserDateofbirth: joi.date().iso(),
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
