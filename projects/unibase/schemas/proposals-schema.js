import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'ProposerID',
  'ProposeeID',
  'ProposalAssessmentID',
  'ProposalConfirmationID',
];

schema.record = joi
  .object({
    ProposalID: joi.number().integer().min(1).allow(null),
    ProposerID: joi.number().integer().min(1),
    ProposeeID: joi.number().integer().min(1),
    ProposalAssessmentID: joi.number().integer().min(1),
    ProposalConfirmationID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
