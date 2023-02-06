const model = {};

model.table = 'Usertypes';
model.mutableFields = ['UsertypeName'];
model.idField = 'UsertypeID';

model.buildReadQuery = (id, variant) => {
  const table = model.table;
  const fields = [model.idField, ...model.mutableFields];

  let sql = '';
  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${table}`;
      if (id) sql += ` WHERE UsertypeID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
