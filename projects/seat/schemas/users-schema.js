import joi from 'joi';

const schema = {};

schema.mutableFields = [
  'UserFirstname',
  'UserLastname',
  'UserDateofbirth',
  'UserEmail',
  'UserImageURL',
  'UserUsertypeID',
  'UserRoleID',
  'UserGuestofID',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserDateofbirth: joi.date().iso().allow(null),
    UserEmail: joi.string().email(),
    UserImageURL: joi.string().uri(),
    UserUsertypeID: joi.number().integer().min(1).allow(null),
    UserRoleID: joi.number().integer().min(1).allow(null),
    UserGuestofID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  UserDateofbirth: (value) => (value === null ? null : new Date(value)),
};

export default schema;
