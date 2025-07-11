class Model {
  constructor(model) {
    this.table = model.table;
    this.idField = model.idField;
    this.mutableFields = model.mutableFields;
    this.buildReadQuery = model.buildReadQuery;
  }

  buildSetFields = (fields) =>
    fields.reduce(
      (setSQL, field, index) =>
        setSQL + `${field}=:${field}` + (index === fields.length - 1 ? '' : ', '),
      'SET '
    );

  recoverAllowedFieldsInRecord = (allowedFields, record) =>
    allowedFields.filter((field) => record.hasOwnProperty(field));

  buildCreateQuery = (req) => {
    const allowedRecordFields = this.recoverAllowedFieldsInRecord(this.mutableFields, req.body);
    const sql = `INSERT INTO ${this.table} ` + this.buildSetFields(allowedRecordFields);
    return { sql, parameters: req.body };
  };

  buildUpdateQuery = (req) => {
    const allowedRecordFields = this.recoverAllowedFieldsInRecord(this.mutableFields, req.body);
    const sql =
      `UPDATE ${this.table} ` +
      this.buildSetFields(allowedRecordFields) +
      ` WHERE ${this.idField}=:${this.idField}`;
    return { sql, parameters: { ...req.body, [this.idField]: req.params.id } };
  };

  buildDeleteQuery = (req) => {
    const sql = `DELETE FROM ${this.table} WHERE ${this.idField}=:${this.idField}`;
    return { sql, parameters: { [this.idField]: req.params.id } };
  };
}

export default Model;
