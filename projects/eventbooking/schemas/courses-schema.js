import joi from 'joi';

const schema = {};

schema.mutableFields = ['CourseName', 'CourseProviderID'];

schema.record = joi
  .object({
    CourseID: joi.number().integer().min(1).allow(null),
    CourseName: joi.string().min(8),
    CourseProviderID: joi.number().integer().min(1).allow(null),
  })
  .required()
  .unknown(true);

schema.conformor = {};

export default schema;
