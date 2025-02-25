import { Router } from 'express';

import Validator from '#root/validator/Validator.js';
import Model from '#root/models/Model.js';
import Accessor from '#root/accessor/Accessor.js';
import Controller from '#root/controller/Controller.js';

import schema from '../schemas/locations-schema.js';
import modelConfig from '../models/locations-model.js';
import database from '../database.js';

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
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
