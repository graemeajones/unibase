const model = {};

model.table = 'Projectstatus';
model.mutableFields = ['ProjectstatusName'];
model.idField = 'ProjectstatusID';

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
