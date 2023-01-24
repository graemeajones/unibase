const model = {};

model.table = 'Years';
model.mutableFields = ['YearName'];
model.idField = 'YearID';

model.buildReadQuery = (id, variant) => {
  let table = 'Years';
  let fields = ['YearID', 'YearName'];
  let sql = '';

  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (id) sql += ` WHERE YearID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
