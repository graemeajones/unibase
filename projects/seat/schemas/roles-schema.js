import joi from 'joi';

const schema = {};

schema.requiredFields = ['RoleName'];

schema.record = joi
  .object({
    RoleID: joi.number().integer().min(1).allow(null),
    RoleName: joi.string().min(2),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
