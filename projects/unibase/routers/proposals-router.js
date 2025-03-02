import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/proposals-schema.js';
import modelConfig from '../models/proposals-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

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
