import joi from 'joi';

const schema = {};

schema.requiredFields = [
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
];

schema.record = joi
  .object({
    ParameterID: joi.number().integer().valid(1),
    LeadingMinimum: joi.number(),
    LeadingMultiplier: joi.number(),
    LecturingMultiplier: joi.number(),
    WorkshopMultiplier: joi.number(),
    WorkshopSize: joi.number().integer().min(1),
    MarkingTimePerStudent: joi.number(),
    WeeksPer15Credits: joi.number(),
    WeeksPer30Credits: joi.number(),
    LectureHoursPerWeek: joi.number(),
    LeadingMinimum: joi.number(),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
