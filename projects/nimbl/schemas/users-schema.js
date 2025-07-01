import joi from 'joi';

const schema = {};

schema.requiredFields = ['UserFirstname', 'UserLastname', 'UserEmail', 'UserImageURL'];

schema.record = joi
  .object({
    UserID: joi.number().integer().min(1).allow(null),
    UserFirstname: joi.string().min(2),
    UserLastname: joi.string().min(3),
    UserEmail: joi.string().email(),
    UserImageURL: joi.string().uri(),
    UserUsertypeID: joi.number().integer().min(1).allow(null),
    UserLevel: joi.number().integer().min(0).optional(),
    UserGems: joi.number().integer().min(0),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
