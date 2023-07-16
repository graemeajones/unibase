import joi from "joi";

const schema = {};

schema.mutableFields = ["LikerID", "LikeeID", "LikeAffinity"];
schema.id = joi.number().integer().min(1);
schema.record = joi
  .object({
    LikerID: joi.number().integer(),
    LikeeID: joi.number().integer(),
    LikeAffinityID: joi.number().integer(),
  })
  .required()
  .unknown(true);

export default schema;
