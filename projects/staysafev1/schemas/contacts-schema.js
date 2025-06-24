import joi from 'joi';

const schema = {};

schema.mutableFields = ['ContactUserID', 'ContactContactID', 'ContactLabel', 'ContactDatecreated'];

schema.record = joi
  .object({
    ContactID: joi.number().integer().min(1).allow(null),
    ContactUserID: joi.number().integer().min(1).required(),
    ContactContactID: joi.number().integer().min(1).required(),
    ContactLabel: joi.string().min(4).max(32).required(),
    ContactDatecreated: joi.date().iso().optional(),
  })
  .unknown(true);

schema.conformor = {
  ContactDatecreated: (value) => (value === null ? null : new Date(value)),
};

export default schema;
