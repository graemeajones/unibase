import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/positions-schema.js';
import modelConfig from '../models/positions-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));
router.get('/activities/:id(\\d+)', (req, res) => controller.get(req, res, 'activity'));

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
