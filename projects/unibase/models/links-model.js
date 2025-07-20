import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Links',
  idField: 'LinkID',
  mutableFields: ['LinkerID', 'LinkeeID', 'LinkAssessmentID', 'LinkConfirmationID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = `((((Links 
          INNER JOIN Users AS Linkers ON LinkerID=Linkers.UserID) 
          INNER JOIN Users AS Linkees ON LinkeeID=Linkees.UserID) 
          INNER JOIN Assessments ON LinkAssessmentID=AssessmentID) LEFT JOIN Confirmations ON LinkConfirmationID=ConfirmationID )`;
    let fields = [
      model.idField,
      ...model.mutableFields,
      'CONCAT(Linkers.UserLastname, ", ", Linkers.UserFirstname) AS LinkLinkerName',
      'CONCAT(Linkees.UserLastname, ", ", Linkees.UserFirstname) AS LinkLinkeeName',
      'AssessmentName AS LinkAssessmentName',
      'ConfirmationName AS LinkConfirmationName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [
      ...model.mutableFields,
      'LinkLinkerName',
      'LinkLinkeeName',
      'LinkAssesmentName',
      'LinkConfirmationName',
    ];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'LinkID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
