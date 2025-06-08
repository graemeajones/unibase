import { Router } from 'express';
import makeController from '#root/controller/makeController.js';

import schema from '../schemas/users-schema.js';
import modelConfig from '../models/users-model.js';
import dbConfig from '../dbConfig.js';

// Controller ------------------------------------

const controller = makeController(schema, modelConfig, dbConfig);

// Endpoints -------------------------------------

const router = new Router();

router.get('/', (req, res) => controller.get(req, res, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, 'primary'));
router.get('/instructors', (req, res) => controller.get(req, res, 'instructors'));
router.get('/clients', (req, res) => controller.get(req, res, 'clients'));
router.get('/classes/:id(\\d+)', (req, res) => controller.get(req, res, 'class'));

router.post('/', controller.post);
router.put('/:id(\\d+)', controller.put);
router.delete('/:id(\\d+)', controller.delete);

export default router;
