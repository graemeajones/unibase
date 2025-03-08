import joi from 'joi';
import { joiValidDateString } from '#root/validator/utils.js';

const schema = {};

schema.mutableFields = ['ContactUserID', 'ContactContactID', 'ContactLabel', 'ContactDatecreated'];

schema.record = joi
  .object({
    ContactID: joi.number().integer().min(1).allow(null),
    ContactUserID: joi.number().integer().min(1),
    ContactContactID: joi.number().integer().min(1),
    ContactLabel: joi.string().min(4).max(32),
    ContactDatecreated: joiValidDateString.optional(),
  })
  .required()
  .unknown(true);

schema.conformor = {
  ContactDatecreated: (value) => (value === null ? null : new Date(value)),
};

export default schema;
