// Imports ---------------------------------------
import { Router } from 'express';
import bookingstatusRouter from './routers/bookingstatus-router.js';
import bookingsRouter from './routers/bookings-router.js';
import classesRouter from './routers/classes-router.js';
import coursesRouter from './routers/courses-router.js';
import gendersRouter from './routers/genders-router.js';
import locationsRouter from './routers/locations-router.js';
import providersRouter from './routers/providers-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';
import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const listOfEndpoints = [
  {
    entity: 'Bookingstatus',
    sap: '/api/bookingstatus',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all booking status values',
          examples: [`${API_URL}/bookingstatus`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific booking status value identified by the id provided',
          example: `${API_URL}/bookingstatus/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new booking status value',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific booking status value identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific booking status value identified by the id provided',
      },
    },
  },
  {
    entity: 'Bookings',
    sap: '/api/bookings',
    services: {
      post: {
        endpoint: '/',
        description: 'Insert a new booking',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific booking identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific booking identified by the id provided',
      },
    },
  },
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
        {
          endpoint: '/courses/{id}',
          description:
            'Returns those classes associated with a specific course identified by the id provided',
          example: `${API_URL}/classes/courses/1`,
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
        {
          endpoint: '/classes/{id}',
          description:
            'Returns the set of users associated with the class identified by the id provided',
          example: [
            `${API_URL}/users/classes/1`,
            `${API_URL}/users/classes/1?UserBookingstatusName=Absent`,
          ],
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

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/bookingstatus', bookingstatusRouter);
router.use('/bookings', bookingsRouter);
router.use('/classes', classesRouter);
router.use('/courses', coursesRouter);
router.use('/genders', gendersRouter);
router.use('/locations', locationsRouter);
router.use('/providers', providersRouter);
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
