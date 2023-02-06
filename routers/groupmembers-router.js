import { Router } from 'express';
import Validator from '../validator/Validator.js';
import schema from '../validator/groupmembers-schema.js';
import Model from '../models/Model.js';
import modelConfig from '../models/groupmembers-model.js';
import database from '../database.js';
import Accessor from '../accessor/Accessor.js';
import Controller from '../controller/Controller.js';

// Validator -------------------------------------

const validator = new Validator(schema);

// Model -----------------------------------------

const model = new Model(modelConfig);

// Data accessor ---------------------------------

const accessor = new Accessor(model, database);

// Controller ------------------------------------

const controller = new Controller(validator, accessor);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, null));
router.get('/group/:id(\\d+)', (req, res) => controller.get(req, res, "group"));
router.get('/user/:id(\\d+)', (req, res) => controller.get(req, res, "group"));
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
