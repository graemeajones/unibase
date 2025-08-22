import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/parameters-schema.js';
import modelConfig from '../models/parameters-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => {
  req.params.id = 1; // Only one entry is allowed for this entity
  controller.get(req, res, 'primary');
});

router.put('/', (req, res) => {
  req.params.id = 1; // Only one entry is allowed for this entity
  controller.put(req, res);
});

export default router;
