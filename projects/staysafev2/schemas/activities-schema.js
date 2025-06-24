import joi from 'joi';

const schema = {};

schema.mutableFields = [
  'ActivityName',
  'ActivityUserID',
  'ActivityDescription',
  'ActivityFromID',
  'ActivityLeave',
  'ActivityToID',
  'ActivityArrive',
  'ActivityModeID',
  'ActivityStatusID',
];

schema.record = joi
  .object({
    ActivityID: joi.number().integer().min(1).allow(null),
    ActivityName: joi.string().min(8).max(64),
    ActivityUserID: joi.number().integer().min(1),
    ActivityDescription: joi.string().min(4).max(255),
    ActivityFromID: joi.number().integer().min(1),
    ActivityLeave: joi.date().iso(),
    ActivityToID: joi.number().integer().min(1),
    ActivityArrive: joi.date().iso(),
    ActivityModeID: joi.number().integer().min(1).allow(null),
    ActivityStatusID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {
  ActivityLeave: (value) => (value === null ? null : new Date(value)),
  ActivityArrive: (value) => (value === null ? null : new Date(value)),
};

export default schema;
