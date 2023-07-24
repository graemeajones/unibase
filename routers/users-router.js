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

router.get('/', (req, res) => controller.get(req, res, null, null));
router.get('/:id(\\d+)', (req, res) => controller.get(req, res, null, { users: req.params.id }));
router.get('/student', (req, res) => controller.get(req, res, 'student', null));
router.get('/staff', (req, res) => controller.get(req, res, 'staff', null));
router.get('/usertype/:id(\\d+)', (req, res) => controller.get(req, res, 'usertype', { usertype: req.params.id }));
router.get('/groups/:id(\\d+)', (req, res) => controller.get(req, res, 'groups', { groups: req.params.id }));
router.get('/modules/:mid(\\d+)', (req, res) => controller.get(req, res, 'modules', { modules: req.params.mid }));
router.get('/modules/:mid(\\d+)/likes/:uid(\\d+)', (req, res) =>
  controller.get(req, res, 'moduleslikedby', { modules: req.params.mid, users: req.params.uid })
);
router.get('/likes/:id(\\d+)/', (req, res) => controller.get(req, res, 'likedby', { likes: req.params.id }));
router.get('/likes/:id(\\d+)/dislikedby', (req, res) =>
  controller.get(req, res, 'dislikedby', { likes: req.params.id })
);
router.get('/likes/:id(\\d+)/wholikes', (req, res) => controller.get(req, res, 'wholikes', { likes: req.params.id }));
router.get('/likes/:id(\\d+)/whodislikes', (req, res) =>
  controller.get(req, res, 'whodislikes', { likes: req.params.id })
);

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

export default router;
