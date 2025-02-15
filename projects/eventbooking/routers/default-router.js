import { Router } from 'express';

const API_URL = 'http://softwarehub.uk/unibase/events/api';
// const API_URL = 'http://localhost:5000/events/api';

// Endpoints -------------------------------------

const listOfEndpoints = [
  {
    entity: 'Classes',
    sap: '/api/classes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all classes',
          examples: [`${API_URL}/classes`, `${API_URL}/classes?orderby=ClassDay`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific class identified by the id provided',
          example: `${API_URL}/classes/1`,
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
    entity: 'Courses',
    sap: '/api/courses',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all courses',
          example: `${API_URL}/courses`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific course identified by the id provided',
          example: `${API_URL}/courses/1`,
        },
        {
          endpoint: '/providers/{id}',
          description:
            'Returns the set of courses associated with the provider identified by the id provided',
          example: `${API_URL}/courses/providers/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new course',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific course identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific course identified by the id provided',
      },
    },
  },
  {
    entity: 'Genders',
    sap: '/api/genders',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all genders',
          examples: [`${API_URL}/genders`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific gender identified by the id provided',
          example: `${API_URL}/genders/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new gender',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific gender identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific gender identified by the id provided',
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
    entity: 'Providers',
    sap: '/api/providers',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all providers',
          examples: [`${API_URL}/providers`, `${API_URL}/providers?orderby=ProviderName`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific provider identified by the id provided',
          example: `${API_URL}/providers/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new provider',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific provider identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific provider identified by the id provided',
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
          endpoint: '/instructors',
          description: 'Returns all instructors',
          example: `${API_URL}/users/instructors`,
        },
        {
          endpoint: '/clients',
          description: 'Returns all clients',
          example: `${API_URL}/users/clients`,
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
          examples: [`${API_URL}/usertypes`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user type identified by the id provided',
          example: `${API_URL}/usertypes/1`,
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

// Routers ---------------------------------------

export const domainRouter = new Router();

domainRouter.get('/', (req, res) =>
  res.status(200).json({
    message: 'List of available endpoints',
    listOfEndpoints,
  })
);

export const defaultRouter = new Router();

defaultRouter.get('/', (req, res) =>
  res.status(404).json({
    message: 'Specified endpoint not found',
    listOfEndpoints,
  })
);
