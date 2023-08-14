import { parseRequestQuery, constructPreparedStatement } from "./utils.js";

const model = {
  table: "Logs",
  idField: "LogID",
  mutableFields: ["LogName", "LogGroupID", "LogSubmissiondate"],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = "(Logs INNER JOIN Groups ON LogGroupID=GroupID)";
    let fields = [model.idField, ...model.mutableFields, "GroupName AS LogGroupName"];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, "LogGroupName"];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case "group":
        where = "LogGroupID =:ID";
        parameters = { ID: parseInt(req.params.id) };
        break;
      case "primary":
        where = "LogID=:ID";
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
