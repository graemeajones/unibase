import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/activities-schema.js';
import modelConfig from '../models/activities-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));
router.get('/users/:id(\\d+)', (req, res) => controller.get(req, res, 'users'));
router.get('/contactsof/:id(\\d+)', (req, res) => controller.get(req, res, 'contacts'));

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
