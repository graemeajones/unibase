import joi from 'joi';

const schema = {};

schema.mutableFields = ['ProjectName', 'ProjectGroupsize', 'ProjectStartdate', 'ProjectProjectstatusID', 'ProjectModuleID'];
schema.id = joi.number().integer().min(1);
schema.record = joi.object({
  ProjectID: joi.number().integer(), 
  ProjectName: joi.string().min(8), 
  ProjectGroupsize: joi.number().integer().min(2), 
  ProjectStartdate: joi.date(),
  ProjectProjectstatusID: joi.number().integer(),
  ProjectModuleID: joi.number().integer()
}).required().unknown(true);

export default schema;
