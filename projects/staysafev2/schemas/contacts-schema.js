import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'ContactUserID',
  'ContactContactID',
  'ContactLabel',
  'ContactDatecreated',
  'ContactVisibility',
];

schema.record = joi
  .object({
    ContactID: joi.number().integer().min(1).allow(null),
    ContactUserID: joi.number().integer().min(1).required(),
    ContactContactID: joi.number().integer().min(1).required(),
    ContactLabel: joi.string().min(4).max(32).required(),
    ContactDatecreated: joi.date().iso().optional(),
    ContactVisibility: joi.boolean().allow(0, 1).optional(),
  })
  .unknown(true);

schema.conformor = {
  ContactDatecreated: (value) => (value === null ? null : new Date(value)),
  ContactVisibility: (value) => (value ? true : false),
};

export default schema;
