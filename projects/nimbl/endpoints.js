// Imports ---------------------------------------
import { Router } from 'express';

import categoriesRouter from './routers/categories-router.js';
import eventsRouter from './routers/events-router.js';
import petsRouter from './routers/pets-router.js';
import productsRouter from './routers/products-router.js';
import tasksRouter from './routers/tasks-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/nimbl/api`;

const listOfEndpoints = [
  {
    entity: 'Categories',
    sap: '/api/categories',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all categories',
          examples: [`${API_PATH}/categories`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific category identified by the id provided',
          examples: [`${API_PATH}/categories/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new category',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific category identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific category identified by the id provided',
      },
    },
  },
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
    entity: 'Products',
    sap: '/api/products',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all products',
          examples: [`${API_PATH}/products`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific product identified by the id provided',
          examples: [`${API_PATH}/products/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new product',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific product identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific product identified by the id provided',
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

router.use('/categories', categoriesRouter);
router.use('/events', eventsRouter);
router.use('/pets', petsRouter);
router.use('/products', productsRouter);
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
