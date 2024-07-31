// Imports ---------------------------------------
import { Router } from 'express';
import technologiesRouter from './AIIS/technologies-router.js';

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/technologies', technologiesRouter);

export default router;
