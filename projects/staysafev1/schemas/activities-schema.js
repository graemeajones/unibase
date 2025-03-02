import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = [
  'ActivityID',
  'ActivityName',
  'ActivityUserID',
  'ActivityDescription',
  'ActivityFromID',
  'ActivityLeave',
  'ActivityToID',
  'ActivityArrive',
  'ActvityStatusID',
];

schema.record = joi
  .object({
    ActivityID: joi.number().integer().min(1).allow(null),
    ActivityName: joi.string().min(8).max(64),
    ActivityUserID: joi.number().integer().min(1),
    ActivityDescription: joi.string().min(4).max(255),
    ActivityFromID: joi.number().integer().min(1),
    ActivityLeave: joiValidDateString,
    ActivityToID: joi.number().integer().min(1),
    ActivityArrive: joiValidDateString,
    ActvityStatusID: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {
  ContactDatecreated: (value) => (value === null ? null : new Date(value)),
};

export default schema;
