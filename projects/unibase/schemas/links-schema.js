import joi from 'joi';

const schema = {};

schema.requiredFields = ['LinkerID ', 'LinkeeID', 'LinkAssessmentID'];

schema.record = joi
  .object({
    LinkID: joi.number().integer().min(1).allow(null),
    LinkerID: joi.number().integer().min(1),
    LinkeeID: joi.number().integer().min(1),
    LinkAssessmentID: joi.number().integer().min(1),
    LinkConfirmationID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
