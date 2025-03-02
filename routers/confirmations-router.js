import { Router } from 'express';
import Validator from '../validator/Validator.js';
import schema from '../validator/confirmations-schema.js';
import Model from '../model/Model.js';
import modelConfig from '../model/confirmations-model.js';
import dbConfig from '../dbConfig.js';
import Accessor from '../accessor/Accessor.js';
import Controller from '../controller/Controller.js';

// Validator -------------------------------------

const validator = new Validator(schema);

// Model -----------------------------------------

const model = new Model(modelConfig);

// Data accessor ---------------------------------

const accessor = new Accessor(model, dbConfig);

// Controller ------------------------------------

const controller = new Controller(validator, accessor);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));

export default router;
