// Imports ---------------------------------------
import { Router } from 'express';

import experienceRouter from './routers/experience-router.js';
import formatRouter from './routers/format-router.js';
import jobtitlesRouter from './routers/jobtitles-router.js';
import technologiesRouter from './routers/technologies-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/aiis/api`;

const listOfEndpoints = [
  {
    entity: 'Experiences',
    sap: '/api/experiences',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all experience values',
          examples: [`${API_PATH}/experiences`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific experience value identified by the id provided',
          example: `${API_PATH}/experiences/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new experience value',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific experience value identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific experience value identified by the id provided',
      },
    },
  },
  {
    entity: 'Formats',
    sap: '/api/formats',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all format',
          examples: [`${API_PATH}/formats`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific format identified by the id provided',
          example: `${API_PATH}/formats/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new class',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific class identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific class identified by the id provided',
      },
    },
  },
  {
    entity: 'Jobtitles',
    sap: '/api/jobtitles',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all jobtitles',
          examples: [`${API_PATH}/jobtitles`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific jobtitle identified by the id provided',
          example: `${API_PATH}/jobtitles/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new jobtitle',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific jobtitle identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific jobtitle identified by the id provided',
      },
    },
  },
  {
    entity: 'Technologies',
    sap: '/api/technologies',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all technologies',
          example: `${API_PATH}/technologies`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific technology identified by the id provided',
          example: `${API_PATH}/technologies/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new technology',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific technology identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific technology identified by the id provided',
      },
    },
  },
];

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/experiences', experienceRouter);
router.use('/formats', formatRouter);
router.use('/jobtitles', jobtitlesRouter);
router.use('/technologies', technologiesRouter);

router.get('/', (req, res) =>
  res.status(200).json({
    message: 'List of available endpoints',
    listOfEndpoints,
  })
);
router.get('/*', (req, res) =>
  res.status(404).json({
    message: 'Specified endpoint not found',
    listOfEndpoints,
  })
);

export default router;
