import joi from 'joi';

const schema = {};

schema.mutableFields = ['LikerID', 'LikeeID', 'LikeAffinityID'];

schema.record = joi
  .object({
    LikerID: joi.number().integer().min(1).allow(null),
    LikeeID: joi.number().integer().min(1),
    LikeAffinityID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

export default schema;
