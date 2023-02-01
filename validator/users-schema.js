import joi from 'joi';

const schema = {};

schema.mutableFields = ['UserFirstname', 'UserLastname', 'UserEmail', 'UserLevel', 'UserYearID', 'UserUsertypeID', 'UserImageURL'];
schema.id = joi.number().integer().min(1);
schema.record = joi.object({
  UserID: joi.number().integer(), 
  UserFirstname: joi.string().min(1), 
  UserLastname: joi.string().min(1), 
  UserEmail: joi.string().email(),
  UserPassword: joi.string().regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/),
  UserRegistered: joi.boolean(),
  UserUsertypeID: joi.number().integer().allow(null),
  UserYearID: joi.number().integer().allow(null),
  UserLevel: joi.number().integer().min(3).max(7).when('UserUsertypeID', { is: 1, then: joi.allow(0)}),
  UserImageURL: joi.string().uri()
}).required().unknown(true);

export default schema;
