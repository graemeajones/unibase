import { Router } from 'express';

const API_URL = 'http://softwarehub.uk/unibase/api';
//const API_URL = 'http://localhost:5000/api';

// Endpoints -------------------------------------

const listOfEndpoints = [
  {
    entity: 'Assessments',
    sap: '/api/assessments',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all assessments',
          example: `${API_URL}/assessments`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific assessment identified by the id provided',
          example: `${API_URL}/assessments/1`,
        },
        {
          endpoint: '/module/{id}',
          description: 'Returns the set of assessments associated with the module identified by the id provided',
          example: `${API_URL}/assessments/module/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new assessment',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific assessment identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific assessment identified by the id provided',
      },
    },
  },
  {
    entity: 'Assessment Types',
    sap: '/api/assessmenttypes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all assessment types',
          example: `${API_URL}/assessmenttypes`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific assessment type identified by the id provided',
          example: `${API_URL}/assessmenttypes/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new assessment type',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific assessment type identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific assessment type identified by the id provided',
      },
    },
  },
  {
    entity: 'Groups',
    sap: '/api/groups',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all groups',
          example: `${API_URL}/groups`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific group identified by the id provided',
          example: `${API_URL}/groups/1`,
        },
        {
          endpoint: '/assessment/{id}',
          description: 'Returns the set of groups associated with the assessment identified by the id provided.',
          example: `${API_URL}/groups/assessment/10`,
        },
        {
          endpoint: '/users/{id}',
          description: 'Returns the set of groups associated with the user identified by the id provided.',
          example: `${API_URL}/groups/users/276`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new group',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific group identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific group identified by the id provided',
      },
    },
  },
  {
    entity: 'Group Members',
    sap: '/api/groupmembers',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all group member records',
          example: `${API_URL}/groupmembers`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific group member record identified by the id provided',
          example: `${API_URL}/groupmembers/572`,
        },
        {
          endpoint: '/group/{id}',
          description:
            'Returns the set of group member records associated with the group identified by the id provided.',
          example: `${API_URL}/groupmembers/group/12`,
        },
        {
          endpoint: '/user/{id}',
          description:
            'Returns the set of group member records associated with the user identified by the id provided.',
          example: `${API_URL}/groupmembers/user/276`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new group member record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific group member record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific group member record identified by the id provided',
      },
    },
  },
  {
    entity: 'Likes',
    sap: '/api/likes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all like records',
          example: `${API_URL}/likes`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific like record identified by the id provided',
          example: `${API_URL}/likes/1580`,
        },
        {
          endpoint: '/likedby/{id}',
          description: 'Returns the set of like records generated by the student identified by the id provided',
          example: `${API_URL}/likes/likedby/277`,
        },
        {
          endpoint: '/wholike/{id}',
          description:
            'Returns the set of like records indicating those students who liked the specific user identified by the id provided',
          example: `${API_URL}/likes/wholike/277`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new (dis)like record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific like record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific like record identified by the id provided',
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
          example: `${API_URL}/modules`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific module identified by the id provided',
          example: `${API_URL}/modules/1`,
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of modules associated with the module leader (user) identified by the id provided',
          example: `${API_URL}/modules/leader/824`,
        },
        {
          endpoint: '/users/{id}',
          description: 'Returns the set of modules associated with the student (user) identified by the id provided',
          example: `${API_URL}/modules/users/277`,
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
    entity: 'Module Members',
    sap: '/api/modulemembers',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all module member records',
          example: `${API_URL}/modulemembers`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific module member record identified by the id provided',
          example: `${API_URL}/modulemembers/2`,
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of module member records associated with the module identified by the id provided.',
          example: `${API_URL}/modulemembers/module/1`,
        },
        {
          endpoint: '/user/{id}',
          description:
            'Returns the set of module member records associated with the user identified by the id provided.',
          example: `${API_URL}/modulemembers/user/276`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new module member record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific module member record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific module member record identified by the id provided',
      },
    },
  },
  {
    entity: 'Projects',
    sap: '/api/projects',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all projects',
          example: `${API_URL}/projects`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific project identified by the id provided',
          example: `${API_URL}/projects/1`,
        },
        {
          endpoint: '/module/{id}',
          description: 'Returns the set of projects associated with the module identified by the id provided',
          example: `${API_URL}/projects/module/4`,
        },
        {
          endpoint: '/users/{id}',
          description: 'Returns the set of projects associated with the student (user) identified by the id provided',
          example: `${API_URL}/projects/users/277`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new project record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific project record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific project record identified by the id provided',
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
          example: `${API_URL}/users/276`,
        },
        {
          endpoint: '/student',
          description: 'Returns those user records associated with the usertype student',
          example: `${API_URL}/users/student`,
        },
        {
          endpoint: '/staff',
          description: 'Returns those user records associated with the usertype staff',
          example: `${API_URL}/users/staff`,
        },
        {
          endpoint: '/usertype/{id}',
          description: 'Returns the set of users associated with the usertype identified by the id provided',
          example: `${API_URL}/users/usertype/1`,
        },
        {
          endpoint: '/modules/{id}',
          description: 'Returns the set of users associated with the module identified by the id provided',
          example: `${API_URL}/users/modules/4`,
        },
        {
          endpoint: '/modules/{mid}/likes/{uid}',
          description: 'Returns the set of users in a specific module liked by a specific user',
          example: `${API_URL}/users/modules/4/likes/277`,
        },
        {
          endpoint: '/likes/{id}',
          description:
            'Returns all student users augmented with like information relative to the user identified by the id provided',
          example: `${API_URL}/users/likes/277`,
        },
        {
          endpoint: '/likes/{id}/likedby',
          description: 'Returns the set of users liked by the user identified by the id provided',
          example: `${API_URL}/users/likes/277/likedby`,
        },
        {
          endpoint: '/likes/{id}/dislikedby',
          description: 'Returns the set of users disliked by the user identified by the id provided',
          example: `${API_URL}/users/likes/277/dislikedby`,
        },
        {
          endpoint: '/likes/{id}/wholikes',
          description: 'Returns the set of users who like the user identified by the id provided',
          example: `${API_URL}/users/likes/277/wholikes`,
        },
        {
          endpoint: '/likes/{id}/whodislikes',
          description: 'Returns the set of users who dislike the user identified by the id provided',
          example: `${API_URL}/users/likes/277/whodislikes`,
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
    entity: 'User Types',
    sap: '/api/assessmenttypes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns the possible set of user type values',
          example: `${API_URL}/usertypes`,
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
  {
    entity: 'Years',
    sap: '/api/years',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns the possible set of year records',
          example: `${API_URL}/years`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific year record identified by the id provided',
          example: `${API_URL}/years/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new year record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific year record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific year record identified by the id provided',
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
  res.status(200).json({
    message: 'Specified endpoint not found',
    listOfEndpoints,
  })
);
