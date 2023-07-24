const model = {};

model.table = 'Usertypes';
model.idField = 'UsertypeID';
model.mutableFields = ['UsertypeName'];

model.buildReadQuery = (variant, ids) => {
  const table = model.table;
  const fields = [model.idField, ...model.mutableFields];

  let sql = '';
  let data = {};

  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (ids) {
        sql += ` WHERE UsertypeID=:ID`;
        data = { ID: ids['usertypes'] };
      }
  }

  return { sql, data };
};

export default model;
