import joi from 'joi';

const schema = {};

schema.mutableFields = ['LikerID', 'LikeeID', 'LikeAffinity'];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    LikerID: joi.number().integer().min(1).allow(null),
    LikeeID: joi.number().integer().min(1).allow(null),
    LikeAffinityID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

export default schema;
