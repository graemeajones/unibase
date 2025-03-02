import { Router } from 'express';
import Validator from '../validator/Validator.js';
import schema from '../validator/proposals-schema.js';
import Model from '../model/Model.js';
import modelConfig from '../model/proposals-model.js';
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
router.get('/assessments/:id(\\d+)', (req, res) => controller.get(req, res, 'assessments'));
router.get('/assessments/:aid(\\d+)/proposedby/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'proposedby')
);
router.get('/assessments/:aid(\\d+)/whoproposed/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'whoproposed')
);

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
