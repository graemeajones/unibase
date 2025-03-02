import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Groups',
  idField: 'GroupID',
  mutableFields: ['GroupName', 'GroupAssessmentID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table =
      '((Groups LEFT JOIN Assessments ON GroupAssessmentID=AssessmentID) LEFT JOIN Modules ON AssessmentModuleID=ModuleID)';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'AssessmentName AS GroupAssessmentName',
      'ModuleID AS GroupModuleID',
      'ModuleName AS GroupModuleName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'GroupAssessmentName', 'GroupModuleName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'assessment':
        where = 'AssessmentID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'module':
        where = 'ModuleID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'users':
        table = `Groupmembers INNER JOIN ${table} ON Groupmembers.GroupmemberGroupID=Groups.GroupID`;
        where = 'GroupmemberUserID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'primary':
        where = 'GroupID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
