const model = {};

model.table = "Assessmenttypes";
model.mutableFields = ["AssessmenttypeCode", "AssessmenttypeDescription"];
model.idField = "AssessmenttypeID";

model.buildReadQuery = (id, variant) => {
  let sql = "";

  switch (variant) {
    default:
      sql = `SELECT ${model.idField}, ${model.mutableFields} FROM ${model.table}`;
      if (id) sql += ` WHERE AssessmenttypeID=:ID`;
  }

  return { sql, data: { ID: id } };
};

export default model;
