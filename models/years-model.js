const model = {};

model.table = 'Years';
model.idField = 'YearID';
model.mutableFields = ['YearName'];

model.buildReadQuery = (req, variant) => {
  let table = 'Years';
  let fields = ['YearID', 'YearName'];

  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (req.params.id) {
        sql += ` WHERE YearID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
