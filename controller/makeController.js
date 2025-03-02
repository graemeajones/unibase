import Validator from '#root/validator/Validator.js';
import Model from '#root/model/Model.js';
import Accessor from '#root/accessor/Accessor.js';
import Controller from '#root/controller/Controller.js';

const makeController = (schema, modelConfig, dbConfig) => {
  const validator = new Validator(schema);
  const model = new Model(modelConfig);
  const accessor = new Accessor(model, dbConfig);
  return new Controller(validator, accessor);
};

export default makeController;
