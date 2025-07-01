import joi from 'joi';

const schema = {};

schema.requiredFields = ['GroupmemberGroupID', 'GroupmemberUserID'];

schema.record = joi
  .object({
    GroupmemberID: joi.number().integer().min(1).allow(null),
    GroupmemberGroupID: joi.number().integer().min(1),
    GroupmemberUserID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
