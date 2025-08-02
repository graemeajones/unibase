// Imports ---------------------------------------
import { Router } from 'express';

import dutiesRouter from './routers/duties-router.js';
import modulesRouter from './routers/modules-router.js';
import mydutiesRouter from './routers/myduties-router.js';
import positionsRouter from './routers/positions-router.js';
import teachingRouter from './routers/teaching-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/was/api`;

const listOfEndpoints = [
  {
    entity: 'Duties',
    sap: '/api/duties',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all duties',
          examples: [`${API_PATH}/duties`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific duty identified by the id provided',
          examples: [`${API_PATH}/duties/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new duty',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific duty identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific duty identified by the id provided',
      },
    },
  },
  {
    entity: 'Modules',
    sap: '/api/modules',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all modules',
          examples: [`${API_PATH}/modules`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific module identified by the id provided',
          examples: [`${API_PATH}/modules/1`],
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of modules associated with the module leader (user) identified by the id provided',
          examples: [`${API_PATH}/modules/leader/34`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new module record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific module record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific module record identified by the id provided',
      },
    },
  },
  {
    entity: 'Myduties',
    sap: '/api/myduties',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all duty assignments',
          examples: [`${API_PATH}/myduties`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific duty assignment identified by the id provided',
          examples: [`${API_PATH}/myduties/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new duty assignment',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific duty assignment identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific duty assignment identified by the id provided',
      },
    },
  },
  {
    entity: 'Positions',
    sap: '/api/positions',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all positions',
          examples: [`${API_PATH}/positions`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific position identified by the id provided',
          examples: [`${API_PATH}/positions/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new position',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific position identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific position identified by the id provided',
      },
    },
  },
  {
    entity: 'Teaching',
    sap: '/api/teaching',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all teaching',
          examples: [`${API_PATH}/teaching`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific teaching contribution identified by the id provided',
          examples: [`${API_PATH}/teaching/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new teaching contribution',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific teaching contribution identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific teaching contribution identified by the id provided',
      },
    },
  },
  {
    entity: 'Users',
    sap: '/api/users',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all users',
          examples: [`${API_PATH}/users`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user identified by the id provided',
          examples: [`${API_PATH}/users/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new user',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific user identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific user identified by the id provided',
      },
    },
  },
  {
    entity: 'User types',
    sap: '/api/usertypes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all user types',
          examples: [`${API_PATH}/usertypes`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user type identified by the id provided',
          examples: [`${API_PATH}/usertypes/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new user type',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific user type identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific user type identified by the id provided',
      },
    },
  },
];

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/duties', dutiesRouter);
router.use('/modules', modulesRouter);
router.use('/myduties', mydutiesRouter);
router.use('/positions', positionsRouter);
router.use('/teaching', teachingRouter);
router.use('/users', usersRouter);
router.use('/usertypes', usertypesRouter);

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
