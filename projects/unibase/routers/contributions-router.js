import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/contributions-schema.js';
import modelConfig from '../models/contributions-model.js';
import dbConfig from '../dbConfig.js';

// Validator -------------------------------------

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));
router.get('/log/:id(\\d+)', (req, res) => controller.get(req, res, 'log'));
router.get('/group/:id(\\d+)', (req, res) => controller.get(req, res, 'group'));

router.post('/', controller.post);
router.put('/:id(\\d+)', controller.put);
router.delete('/:id(\\d+)', controller.delete);

export default router;
