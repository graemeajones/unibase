import joi from 'joi';

const schema = {};

schema.requiredFields = ['WorkshopName', 'WorkshopDescription', 'WorkshopModuleID'];

schema.record = joi
  .object({
    WorkshopID: joi.number().integer().min(1).allow(null),
    WorkshopName: joi.string().min(5).max(128),
    WorkshopDescription: joi.string().min(5).max(128),
    WorkshopModuleID: joi.number().integer().min(1)
  })
  .required()
  .unknown(true);

schema.conformor = {
  
};

export default schema;
