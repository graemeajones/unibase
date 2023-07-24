const model = {};

model.table = 'Years';
model.idField = 'YearID';
model.mutableFields = ['YearName'];

model.buildReadQuery = (variant, ids) => {
  let table = 'Years';
  let fields = ['YearID', 'YearName'];

  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (ids) {
        sql += ` WHERE YearID=:ID`;
        data = { ID: ids['years'] };
      }
  }

  return { sql, data };
};

export default model;
