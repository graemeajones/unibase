// Imports ---------------------------------------
import { Router } from 'express';

import eventsRouter from './routers/events-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/seat/api`;

const listOfEndpoints = [
  {
    entity: 'Events',
    sap: '/api/events',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all events',
          examples: [`${API_PATH}/events`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific event identified by the id provided',
          examples: [`${API_PATH}/events/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new event',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific event identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific event identified by the id provided',
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
          examples: [`${API_PATH}/users/2`],
        },
        {
          endpoint: '/employees',
          description: 'Returns the set of users associated with the employee usertype',
          examples: [`${API_PATH}/users/employees`],
        },
        {
          endpoint: '/roles',
          description:
            'Returns the set of users associated with the role identified by the id provided',
          examples: [`${API_PATH}/users/roles/2`],
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

router.use('/events', eventsRouter);
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
