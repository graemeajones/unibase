import joi from 'joi';

const schema = {};

schema.mutableFields = ['LikerID', 'LikeeID', 'LikeAffinityID'];

schema.record = joi
  .object({
    LikeID: joi.number().integer().min(1).allow(null),
    LikerID: joi.number().integer().min(1),
    LikeeID: joi.number().integer().min(1),
    LikeAffinityID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
