// Imports ---------------------------------------
import { Router } from 'express';

import agegroupsRouter from './routers/agegroups-router.js';
import attendeesRouter from './routers/attendees-router.js';
import eventsRouter from './routers/events-router.js';
import locationsRouter from './routers/locations-router.js';
import rolesRouter from './routers/roles-router.js';
import statusRouter from './routers/status-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/seat/api`;

const listOfEndpoints = [
  {
    entity: 'Agegroups',
    sap: '/api/agegroups',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all agegroup values',
          examples: [`${API_PATH}/agegroups`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific agegroup value identified by the id provided',
          examples: [`${API_PATH}/agegroups/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new agegroup value',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific agegroup value identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific agegroup value identified by the id provided',
      },
    },
  },
  {
    entity: 'Attendees',
    sap: '/api/attendees',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all attendees',
          examples: [`${API_PATH}/attendees`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific attendee identified by the id provided',
          examples: [`${API_PATH}/attendees/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new attendee',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific attendee identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific attendee identified by the id provided',
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
    entity: 'Locations',
    sap: '/api/locations',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all locations',
          examples: [`${API_PATH}/locations`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific location identified by the id provided',
          examples: [`${API_PATH}/locations/1`],
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
    entity: 'Roles',
    sap: '/api/roles',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all roles',
          examples: [`${API_PATH}/roles`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific role identified by the id provided',
          examples: [`${API_PATH}/roles/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new role',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific role identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific role identified by the id provided',
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
          description: 'Returns all status values',
          examples: [`${API_PATH}/status`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific status value identified by the id provided',
          examples: [`${API_PATH}/status/1`],
        },
      ],
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
        {
          endpoint: '/events',
          description:
            'Returns the set of users associated with the event identified by the id provided',
          examples: [
            `${API_PATH}/users/events/41`,
            `${API_PATH}/users/events/41?UserAttendeeStatusName=Declined`,
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

router.use('/agegroups', agegroupsRouter);
router.use('/attendees', attendeesRouter);
router.use('/events', eventsRouter);
router.use('/locations', locationsRouter);
router.use('/roles', rolesRouter);
router.use('/status', statusRouter);
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
