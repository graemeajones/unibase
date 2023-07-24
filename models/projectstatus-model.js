const model = {};

model.table = 'Projectstatus';
model.idField = 'ProjectstatusID';
model.mutableFields = ['ProjectstatusName'];

model.buildReadQuery = (id, variant) => {
  const fields = [model.idField, ...model.mutableFields];

  let sql = '';
  switch (variant) {
    default:
      sql = `SELECT ${fields} FROM ${model.table}`;
      if (id) sql += ` WHERE ProjectstatusID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
