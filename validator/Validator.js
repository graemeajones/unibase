class Validator {
  constructor(schema) {
    this.postBodySchema = schema.record.and(...schema.requiredFields);
    this.putBodySchema = schema.record;
    this.conformor = schema.conformor;
  }

  // Helpers -------------------------------------
  reportErrors = (error) => error.details.map((detail) => detail.message);
  validate = (schema, value) => {
    const { error } = schema.validate(value, { abortEarly: false });
    return error
      ? { isValid: false, message: this.reportErrors(error) }
      : { isValid: true, message: null };
  };

  // Methods -------------------------------------
  post = (value) => this.validate(this.postBodySchema, value);
  put = (value) => this.validate(this.putBodySchema, value);
  conform = (value) => {
    for (const key in value) {
      if (this.conformor.hasOwnProperty(key)) value[key] = this.conformor[key](value[key]);
    }
    return value;
  };
}

export default Validator;
