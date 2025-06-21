import joi from 'joi';
import { joiValidISOdatetime } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = ['LogName', 'LogGroupID', 'LogSubmissiondate'];

schema.record = joi
  .object({
    LogID: joi.number().integer().min(1).allow(null),
    LogName: joi.string().min(5).max(128),
    LogGroupID: joi.number().integer().min(1),
    LogSubmissiondate: joiValidISOdatetime,
  })
  .required()
  .unknown(true);

schema.conformor = {
  LogSubmissiondate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
