import joi from 'joi';

const schema = {};

schema.requiredFields = [
  'ProductName',
  'ProductDescription',
  'ProductStart',
  'ProductDuration',
  'ProductPetID',
  'ProductImageURL',
  'ProductCategoryID',
  'ProductGems',
  'ProductCost',
];

schema.record = joi
  .object({
    ProductID: joi.number().integer().min(1).allow(null),
    ProductName: joi.string().min(8),
    ProductDescription: joi.string().min(8),
    ProductImageURL: joi.string().uri(),
    ProductCategoryID: joi.number().integer().min(1).allow(null),
    ProductGems: joi.number().integer().min(1),
    ProductCost: joi.number().integer().min(1),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
