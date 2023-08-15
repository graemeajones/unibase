import joi from "joi";

const schema = {};

schema.mutableFields = ["AttendanceName"];

schema.record = joi
  .object({
    AttendanceID: joi.number().integer().min(1).allow(null),
    AttendanceName: joi.string(),
  })
  .required()
  .unknown(true);

export default schema;
