import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'PetName',
  'PetType',
  'PetBreed',
  'PetColour',
  'PetSex',
  'PetAge',
  'PetImageURL',
  'PetOwnerID',
];

schema.record = joi
  .object({
    PetID: joi.number().integer().min(1).allow(null),
    PetName: joi.string().min(2),
    PetType: joi.string().min(3),
    PetBreed: joi.string().min(3),
    PetColour: joi.string().min(3),
    PetSex: joi.string().min(3),
    PetAge: joi.number().integer().min(0),
    PetImageURL: joi.string().allow(''),
    PetOwnerID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
