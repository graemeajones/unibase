import joi from 'joi';

const schema = {};

schema.mutableFields = ['GroupmemberGroupID', 'GroupmemberUserID'];
schema.id = joi.number().integer().min(1);
schema.record = joi.object({
  GroupmemberID: joi.number().integer(), 
  GroupmemberGroupID: joi.number().integer(),
  GroupmemberUserID: joi.number().integer()
}).required().unknown(true);

export default schema;
