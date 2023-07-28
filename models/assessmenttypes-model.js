const model = {};

model.table = 'Assessmenttypes';
model.idField = 'AssessmenttypeID';
model.mutableFields = ['AssessmenttypeCode', 'AssessmenttypeDescription'];

model.buildReadQuery = (req, variant) => {
  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${model.idField}, ${model.mutableFields} FROM ${model.table}`;
      if (req.params.id) {
        sql += ` WHERE AssessmenttypeID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
