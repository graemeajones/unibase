class Validator {
  constructor(schema) {
    this.postBodySchema = schema.record.and(...schema.mutableFields);
    this.putBodySchema = schema.record.or(...schema.mutableFields);
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
    // For each valid key in conformer object
    Object.keys(value).forEach((key) => {
      if (this.conformer.hasOwnProperty(key)) value[key] = this.conformer[key](value[key]);
    });
    return value;
  };
}

export default Validator;
