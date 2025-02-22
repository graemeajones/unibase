// Imports ---------------------------------------
import { Router } from 'express';
import usersRouter from './routers/users-router.js';
import contactsRouter from './routers/contacts-router.js';

// Initialisation --------------------------------

//const API_URL = 'http://softwarehub.uk/unibase/staysafe/api';
const API_URL = 'http://localhost:5000/staysafe/v1/api';

const listOfEndpoints = [
  {
    entity: 'Activities',
    sap: '/api/activities',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all activities',
          examples: [`${API_URL}/activities`, `${API_URL}/activities?orderby=ActivityLeave`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific activity identified by the id provided',
          example: `${API_URL}/activities/1`,
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
    entity: 'Locations',
    sap: '/api/locations',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all locations',
          examples: [`${API_URL}/locations`, `${API_URL}/locations?orderby=LocationName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific location identified by the id provided',
          example: `${API_URL}/locations/1`,
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
    entity: 'Positions',
    sap: '/api/positions',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all positions',
          examples: [`${API_URL}/positions`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific position identified by the id provided',
          example: `${API_URL}/positions/1`,
        },
        {
          endpoint: '/activities/{id}',
          description:
            'Returns all the positions associated with a specific activity identified by the id provided',
          example: `${API_URL}/positions/activities/1`,
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
          examples: [`${API_URL}/status`, `${API_URL}/status?orderby=StatusName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific status entry identified by the id provided',
          example: `${API_URL}/locations/1`,
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
    entity: 'Users',
    sap: '/api/users',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all users',
          example: `${API_URL}/users`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user identified by the id provided',
          example: `${API_URL}/users/1`,
        },
        {
          endpoint: '/contacts/{id}',
          description:
            'Returns all users who are contacts of the specific user identified by the id provided',
          example: `${API_URL}/users/contacts/1`,
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

router.use('/users', usersRouter);
router.use('/contacts', contactsRouter);

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
