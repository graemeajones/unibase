import { Router } from 'express';
import Validator from '../validator/Validator.js';
import schema from '../validator/users-schema.js';
import Model from '../models/Model.js';
import modelConfig from '../models/users-model.js';
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
router.get('/student', (req, res) => controller.get(req, res, 'student'));
router.get('/staff', (req, res) => controller.get(req, res, 'staff'));
router.get('/usertype/:id', (req, res) => controller.get(req, res, 'usertype'));
router.get('/groups/:id', (req, res) => controller.get(req, res, 'groups'));
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
