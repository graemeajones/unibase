import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'UserFirstname',
  'UserLastname',
  'UserEmail',
  'UserLevel',
  'UserYearID',
  'UserUsertypeID',
  'UserImageURL',
];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(1),
    UserLastname: joi.string().min(1),
    UserEmail: joi.string().email(),
    UserPassword: joi
      .string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
    UserRegistered: joi.number().integer().min(0).max(1),
    UserUsertypeID: joi.number().integer().min(1).allow(null),
    UserYearID: joi.number().integer().min(1).allow(null),
    UserLevel: joi
      .number()
      .integer()
      .min(3)
      .max(7)
      .when('UserUsertypeID', { is: 1, then: joi.allow(0) }),
    UserImageURL: joi.string().uri(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
