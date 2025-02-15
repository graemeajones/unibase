// Imports ---------------------------------------
import { Router } from 'express';
import classesRouter from './classes-router.js';
import coursesRouter from './courses-router.js';
import gendersRouter from './genders-router.js';
import locationsRouter from './locations-router.js';
import providersRouter from './providers-router.js';
import usersRouter from './users-router.js';
import usertypesRouter from './usertypes-router.js';
import { domainRouter, defaultRouter } from './default-router.js';

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/classes', classesRouter);
router.use('/courses', coursesRouter);
router.use('/genders', gendersRouter);
router.use('/locations', locationsRouter);
router.use('/providers', providersRouter);
router.use('/users', usersRouter);
router.use('/usertypes', usertypesRouter);
router.use('/', domainRouter);
router.use('/*', defaultRouter);

export default router;
