import joi from "joi";
import { joiValidDateString } from "./utils.js";

const schema = {};

schema.mutableFields = ["LogName", "LogGroupID", "LogSubmissiondate"];

schema.record = joi
  .object({
    LogID: joi.number().integer().min(1).allow(null),
    LogName: joi.string().min(5).max(128),
    LogGroupID: joi.number().integer().min(1),
    LogSubmissiondate: joiValidDateString,
  })
  .required()
  .unknown(true);

export default schema;
