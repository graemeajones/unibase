const model = {};

model.table = 'Assessmenttypes';
model.idField = 'AssessmenttypeID';
model.mutableFields = ['AssessmenttypeCode', 'AssessmenttypeDescription'];

model.buildReadQuery = (variant, ids) => {
  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${model.idField}, ${model.mutableFields} FROM ${model.table}`;
      if (ids) {
        sql += ` WHERE AssessmenttypeID=:ID`;
        data = { ID: ids['assessmenttypes'] };
      }
  }

  return { sql, data };
};

export default model;
