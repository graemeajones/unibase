import joi from "joi";

const schema = {};

schema.mutableFields = ["AssessmenttypeCode", "AssessmenttypeDescription"];

schema.id = joi.number().integer().min(1);

schema.record = joi
  .object({
    AssessmenttypeID: joi.number().integer(),
    AssessmenttypeCode: joi.string().min(8),
    AssessmenttypeDescription: joi.string().uri(),
  })
  .required()
  .unknown(true);

export default schema;
