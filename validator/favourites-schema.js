import joi from 'joi';

const schema = {};

schema.mutableFields = ['FavouriteID', 'FavouriteLikerID', 'FavouriteLikedID', 'FavouriteCategory'];

schema.record = joi
  .object({
    FavouriteID: joi.number().integer().min(1).allow(null),
    FavouriteLikerID: joi.number().integer().min(1),
    FavouriteLikedID: joi.number().integer().min(1),
    FavouriteCategory: joi.string().min(4),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
