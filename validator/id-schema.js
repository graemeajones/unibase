import joi from 'joi';

const idSchema = joi.number().integer().min(1);

export default idSchema;
