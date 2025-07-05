import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'UserTitle',
  'UserFirstname',
  'UserLastname',
  'UserEmail',
  'UserImageURL',
  'UserUsertypeID',
  'UserPositionID',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserTitle: joi.string().min(2).allow(''),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserEmail: joi.string().email(),
    UserImageURL: joi.string().uri().allow(null),
    UserUsertypeID: joi.number().integer().min(1).allow(null),
    UserPositionID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {
  UserDateofbirth: (value) => (value === null ? null : new Date(value)),
};

export default schema;
