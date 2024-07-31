// Imports ---------------------------------------
import { Router } from 'express';
import experienceRouter from './AIIS/experience-router.js';
import jobtitlesRouter from './AIIS/jobtitles-router.js';
import technologiesRouter from './AIIS/technologies-router.js';

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/experience', experienceRouter);
router.use('/jobtitles', jobtitlesRouter);
router.use('/technologies', technologiesRouter);

export default router;
