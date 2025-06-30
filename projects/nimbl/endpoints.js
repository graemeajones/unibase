// Imports ---------------------------------------
import { Router } from 'express';

import eventsRouter from './routers/events-router.js';
import petsRouter from './routers/pets-router.js';
import tasksRouter from './routers/tasks-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/nimbl/api`;

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
        {
          endpoint: '/pets/{id}',
          description:
            'Returns those events associated with the specific pet identified by the id provided',
          examples: [`${API_PATH}/events/pets/1`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns those events associated with the specific owner identified by the id provided',
          examples: [`${API_PATH}/events/users/1`],
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
    entity: 'Pets',
    sap: '/api/pets',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all pets',
          examples: [`${API_PATH}/pets`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific pet identified by the id provided',
          examples: [`${API_PATH}/pets/1`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns those pets associated with the specific owner identified by the id provided',
          examples: [`${API_PATH}/pets/users/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new pet',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific pet identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific pet identified by the id provided',
      },
    },
  },
  {
    entity: 'Tasks',
    sap: '/api/tasks',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all tasks',
          examples: [`${API_PATH}/tasks`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific task identified by the id provided',
          examples: [`${API_PATH}/tasks/1`],
        },
        {
          endpoint: '/pets/{id}',
          description:
            'Returns those tasks associated with the specific pet identified by the id provided',
          examples: [`${API_PATH}/tasks/pets/1`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns those tasks associated with the specific owner identified by the id provided',
          examples: [`${API_PATH}/tasks/users/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new task',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific task identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific task identified by the id provided',
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
        {
          endpoint: '/clients',
          description: 'Returns all clients',
          examples: [`${API_PATH}/users/clients`],
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
router.use('/pets', petsRouter);
router.use('/tasks', tasksRouter);
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
