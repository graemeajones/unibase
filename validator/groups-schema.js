import joi from 'joi';

const schema = {};

schema.mutableFields = ['GroupName', 'GroupProjectID'];
schema.id = joi.number().integer().min(1);
schema.record = joi.object({
  GroupID: joi.number().integer(), 
  GroupName: joi.string().min(8), 
  GroupProjectID: joi.number().integer()
}).required().unknown(true);

export default schema;
