import joi from 'joi';
import idSchema from './id-schema.js';

class Validator {
  constructor(schema) {
    this.getSchema = joi.object().pattern(/^/, idSchema).allow(null);
    this.postSchema = schema.record.and(...schema.mutableFields);
    this.putSchema = joi.object({
      id: idSchema.required(),
      record: schema.record.or(...schema.mutableFields),
    });
    this.deleteSchema = idSchema.required();
  }

  // Helpers -------------------------------------
  reportErrors = (error) => error.details.map((detail) => detail.message);
  validate = (schema, value) => {
    const { error } = schema.validate(value, { abortEarly: false });
    return error ? { isValid: false, message: this.reportErrors(error) } : { isValid: true, message: null };
  };

  // Methods -------------------------------------
  get = (value) => this.validate(this.getSchema, value);
  post = (value) => this.validate(this.postSchema, value);
  put = (value) => this.validate(this.putSchema, value);
  delete = (value) => this.validate(this.deleteSchema, value);
}

export default Validator;
