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
router.get('/student', (req, res) => controller.get(req, res, 'student'));
router.get('/staff', (req, res) => controller.get(req, res, 'staff'));
router.get('/usertype/:id(\\d+)', (req, res) => controller.get(req, res, 'usertype'));
router.get('/groups/:id(\\d+)', (req, res) => controller.get(req, res, 'groups'));
router.get('/modules/:id(\\d+)', (req, res) => controller.get(req, res, 'modules'));
router.get('/modules/:mid(\\d+)/likes/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'moduleslikedby')
);
router.get('/likes/:id(\\d+)/', (req, res) => controller.get(req, res, 'likes'));
router.get('/likedby/:id(\\d+)', (req, res) => controller.get(req, res, 'likedby'));
router.get('/wholike/:id(\\d+)', (req, res) => controller.get(req, res, 'wholike'));
router.get('/assessments/:aid(\\d+)/proposedby/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'proposedby')
);
router.get('/assessments/:aid(\\d+)/whoproposed/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'whoproposed')
);
router.get('/assessments/:aid(\\d+)/notinagroup', (req, res) =>
  controller.get(req, res, 'notinagroup')
);

router.post('/', controller.post);
router.put('/:id(\\d+)', controller.put);
router.delete('/:id(\\d+)', controller.delete);

export default router;
