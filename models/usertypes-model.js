const model = {};

model.table = 'Usertypes';
model.idField = 'UsertypeID';
model.mutableFields = ['UsertypeName'];

model.buildReadQuery = (req, variant) => {
  const table = model.table;
  const fields = [model.idField, ...model.mutableFields];

  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (req.params.id) {
        sql += ` WHERE UsertypeID=:ID`;
        data = { ID: req.params.id };
      }
  }

  return { sql, data };
};

export default model;
