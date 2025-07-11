import joi from 'joi';

const schema = {};

schema.requiredFields = ['LogName', 'LogGroupID', 'LogSubmissiondate'];

schema.record = joi
  .object({
    LogID: joi.number().integer().min(1).allow(null),
    LogName: joi.string().min(5).max(128),
    LogGroupID: joi.number().integer().min(1),
    LogSubmissiondate: joi.date().iso(),
  })
  .required()
  .unknown(true);

schema.conformor = {
  LogSubmissiondate: (value) => (value === null ? null : new Date(value)),
};

export default schema;
