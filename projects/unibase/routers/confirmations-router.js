import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/confirmations-schema.js';
import modelConfig from '../models/confirmations-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));

export default router;
