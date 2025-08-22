import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Parameters',
  idField: 'ParameterID',
  mutableFields: [
    'LeadingMinimum',
    'LeadingMultiplier',
    'LecturingMultiplier',
    'WorkshopMultiplier',
    'WorkshopSize',
    'MarkingTimePerStudent',
    'WeeksPer15Credits',
    'WeeksPer30Credits',
    'LectureHoursPerWeek',
    'WorkshopHoursPerWeek',
  ],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    let [table, fields] = [model.table, [model.idField, ...model.mutableFields]];

    // Resolve Foreign Keys -------------------
    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ParameterID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
