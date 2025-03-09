// Imports ---------------------------------------
import { Router } from 'express';

import activitiesRouter from './routers/activities-router.js';
import contactsRouter from './routers/contacts-router.js';
import locationsRouter from './routers/locations-router.js';
import modesRouter from './routers/modes-router.js';
import positionsRouter from './routers/positions-router.js';
import statusRouter from './routers/status-router.js';
import usersRouter from './routers/users-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/staysafe/v2/api`;

const listOfEndpoints = [
  {
    entity: 'Activities',
    sap: '/api/activities',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all activities',
          examples: [`${API_PATH}/activities`, `${API_PATH}/activities?orderby=ActivityLeave`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific activity identified by the id provided',
          example: `${API_PATH}/activities/1`,
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns all the activities associated with a specific user identified by the id provided',
          example: `${API_PATH}/activities/users/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new activity',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific activity identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific activity identified by the id provided',
      },
    },
  },
  {
    entity: 'Contacts',
    sap: '/api/contacts',
    services: {
      post: {
        endpoint: '/',
        description: 'Insert a new contact',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific contact identified by the id provided',
      },
    },
  },
  {
    entity: 'Locations',
    sap: '/api/locations',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all locations',
          examples: [`${API_PATH}/locations`, `${API_PATH}/locations?orderby=LocationName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific location identified by the id provided',
          example: `${API_PATH}/locations/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new location',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific location identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific location identified by the id provided',
      },
    },
  },
  {
    entity: 'Modes',
    sap: '/api/modes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all travel modes',
          examples: [`${API_PATH}/modes`, `${API_PATH}/modes?orderby=ModeName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific travel mode identified by the id provided',
          example: `${API_PATH}/modes/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new travel mode',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific travel mode identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific travel mode identified by the id provided',
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
          example: `${API_PATH}/positions/1`,
        },
        {
          endpoint: '/activities/{id}',
          description:
            'Returns all the positions associated with a specific activity identified by the id provided',
          example: `${API_PATH}/positions/activities/2`,
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
    entity: 'Status',
    sap: '/api/status',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all status entries',
          examples: [`${API_PATH}/status`, `${API_PATH}/status?orderby=StatusName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific status entry identified by the id provided',
          example: `${API_PATH}/locations/1`,
        },
      ],
      /*
      post: {
        endpoint: '/',
        description: 'Insert a new status value',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific status value identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific status value identified by the id provided',
      },
      */
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
          example: `${API_PATH}/users`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user identified by the id provided',
          example: `${API_PATH}/users/1`,
        },
        {
          endpoint: '/contacts/{id}',
          description:
            'Returns all users who are contacts of the specific user identified by the id provided',
          example: `${API_PATH}/users/contacts/1`,
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
];

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/activities', activitiesRouter);
router.use('/contacts', contactsRouter);
router.use('/locations', locationsRouter);
router.use('/modes', modesRouter);
router.use('/positions', positionsRouter);
router.use('/status', statusRouter);
router.use('/users', usersRouter);

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
