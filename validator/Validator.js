class Validator {
  constructor(schema) {
    this.postBodySchema = schema.record.and(...schema.mutableFields);
    this.putBodySchema = schema.record.or(...schema.mutableFields);
  }

  // Helpers -------------------------------------
  reportErrors = (error) => error.details.map((detail) => detail.message);
  validate = (schema, value) => {
    const { error } = schema.validate(value, { abortEarly: false });
    return error ? { isValid: false, message: this.reportErrors(error) } : { isValid: true, message: null };
  };

  // Methods -------------------------------------
  post = (value) => this.validate(this.postBodySchema, value);
  put = (value) => this.validate(this.putBodySchema, value);
}

export default Validator;
