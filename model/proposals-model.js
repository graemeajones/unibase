import { parseRequestQuery, constructPreparedStatement } from '#root/model/utils.js';

const model = {
  table: 'Proposals',
  idField: 'ProposalID',
  mutableFields: ['ProposerID', 'ProposeeID', 'ProposalAssessmentID', 'ProposalConfirmationID'],

  buildReadQuery: (req, variant) => {
    // Initialisations ------------------------
    // Resolve foreign keys -------------------
    let table = '(Proposals INNER JOIN Assessments ON ProposalAssessmentID=AssessmentID)';
    let fields = [
      model.idField,
      ...model.mutableFields,
      'AssessmentName AS ProposalAssessmentName',
    ];

    // Process request queries ----------------
    const allowedQueryFields = [...model.mutableFields, 'ProposalAssessmentName'];
    const [filter, orderby] = parseRequestQuery(req, allowedQueryFields);

    // Construct prepared statement -----------
    let where = null;
    let parameters = {};
    switch (variant) {
      case 'primary':
        where = 'ProposalID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'assessments':
        where = 'AssessmentID=:ID';
        parameters = { ID: parseInt(req.params.id) };
        break;
      case 'proposedby':
        where = `AssessmentID=:AID AND Proposals.ProposerID=:UID`;
        parameters = { AID: parseInt(req.params.aid), UID: parseInt(req.params.uid) };
        break;
      case 'whoproposed':
        where = `AssessmentID=:AID AND Proposals.ProposeeID=:UID`;
        parameters = { AID: parseInt(req.params.aid), UID: parseInt(req.params.uid) };
        break;
    }

    return constructPreparedStatement(fields, table, where, parameters, filter, orderby);
  },
};

export default model;
