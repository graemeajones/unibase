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
          examples: [
            `${API_URL}/assessments`,
            `${API_URL}/assessments?orderby=AssessmentPublishdate+DESC`,
          ],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific assessment identified by the id provided',
          example: `${API_URL}/assessments/1`,
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of assessments associated with the module identified by the id provided',
          example: `${API_URL}/assessments/module/1`,
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of assessments associated with all the modules led by the staff member identified by the id provided',
          example: `${API_URL}/assessments/leader/824`,
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of assessments associated with the user identified by the id provided',
          examples: [
            `${API_URL}/assessments/users/277`,
            `${API_URL}/assessments/users/277?orderby=AssessmentPublishdate`,
          ],
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
    entity: 'Attendance',
    sap: '/api/attendance',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all attendance types',
          example: `${API_URL}/attendance`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific attendance type identified by the id provided',
          example: `${API_URL}/attendance/1`,
        },
      ],
    },
  },
  {
    entity: 'Completion',
    sap: '/api/completion',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all completion types',
          example: `${API_URL}/completion`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific completion type identified by the id provided',
          example: `${API_URL}/completion/1`,
        },
      ],
    },
  },
  {
    entity: 'Confirmations',
    sap: '/api/confirmations',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all confirmation values',
          example: `${API_URL}/confirmations`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific confirmation identified by the id provided',
          example: `${API_URL}/confirmations/1`,
        },
      ],
    },
  },
  {
    entity: 'Contributions',
    sap: '/api/contributions',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all contributions',
          example: `${API_URL}/contributions`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific contribution identified by the id provided',
          example: `${API_URL}/contributions/1`,
        },
        {
          endpoint: '/log/{id}',
          description:
            'Returns the set of contributions associated with the log identified by the id provided',
          example: `${API_URL}/contributions/log/1`,
        },
        {
          endpoint: '/group/{id}',
          description:
            'Returns the set of contributions associated with the group identified by the id provided',
          example: `${API_URL}/contributions/group/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new contribution record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific contribution identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific contribution record identified by the id provided',
      },
    },
  },
  {
    entity: 'Favourites',
    sap: '/api/favourites',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all favourites',
          examples: [`${API_URL}/favourites`, `${API_URL}/favourites?FavouriteCategory=Groups`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific favourite identified by the id provided',
          example: `${API_URL}/favourites/1`,
        },
        {
          endpoint: '/user/{id}',
          description:
            'Returns the set of favourites associated with the user identified by the id provided',
          examples: [
            `${API_URL}/favourites/users/277`,
            `${API_URL}/favourites/users/277?FavouriteCategory=Assessments`,
          ],
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
          description:
            'Returns the set of groups associated with the assessment identified by the id provided.',
          example: `${API_URL}/groups/assessment/10`,
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of groups associated with the user identified by the id provided.',
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
          examples: [`${API_URL}/likes`, `${API_URL}/likes?LikeAffinityName=Like`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific like record identified by the id provided',
          example: `${API_URL}/likes/1580`,
        },
        {
          endpoint: '/users/{id}/likedby',
          description:
            'Returns the set of like/dislike records generated by the student identified by the id provided',
          examples: [
            `${API_URL}/likes/users/277/likedby`,
            `${API_URL}/likes/users/277/likedby?LikeAffinityName=Like`,
            `${API_URL}/likes/users/277/likedby?LikeAffinityID=2`,
          ],
        },
        {
          endpoint: '/users/{id}/wholikes',
          description:
            'Returns the set of like records indicating those students who liked/disliked the specific user identified by the id provided',
          example: `${API_URL}/likes/users/277/wholikes`,
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
    entity: 'Logs',
    sap: '/api/logs',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all logs',
          example: `${API_URL}/logs`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific log identified by the id provided',
          example: `${API_URL}/logs/1`,
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of logs associated with the group identified by the id provided',
          example: `${API_URL}/logs/group/1`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new log record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific log identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific log record identified by the id provided',
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
          description:
            'Returns the set of modules associated with the student (user) identified by the id provided',
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
          description:
            'Returns the set of projects associated with the module identified by the id provided',
          example: `${API_URL}/projects/module/4`,
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of projects associated with the student (user) identified by the id provided',
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
    entity: 'Project Statuses',
    sap: '/api/projectstatus',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all project status values',
          example: `${API_URL}/projectstatus`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific project status identified by the id provided',
          example: `${API_URL}/projectstatus/1`,
        },
      ],
    },
  },
  {
    entity: 'Proposals',
    sap: '/api/proposals',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all proposals',
          example: `${API_URL}/proposals`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific proposal identified by the id provided',
          example: `${API_URL}/proposals/2`,
        },
        {
          endpoint: '/assessments/{id}',
          description:
            'Returns the set of proposals associated with the specific assessment identified by the id provided',
          example: `${API_URL}/proposals/assessments/13`,
        },
        {
          endpoint: '/assessments/{aid}/users/{uid}/proposedby',
          description:
            'Returns the set of proposals generated by a specific student for a specific assessment',
          example: `${API_URL}/proposals/assessments/13/proposedby/277`,
        },
        {
          endpoint: '/assessments/{aid}/users/{id}/whoproposed',
          description:
            'Returns the set of proposals indicating those students who proposed a specific student for a specific assessment',
          example: `${API_URL}/proposals/assessments/13/whoproposed/527`,
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new proposal',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific proposal identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific proposal identified by the id provided',
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
          description:
            'Returns the set of users associated with the usertype identified by the id provided',
          example: `${API_URL}/users/usertype/1`,
        },
        {
          endpoint: '/modules/{id}',
          description:
            'Returns the set of users associated with the module identified by the id provided',
          example: `${API_URL}/users/modules/4`,
        },
        {
          endpoint: '/groups/{id}',
          description:
            'Returns the set of users associated with the group identified by the id provided',
          example: `${API_URL}/users/groups/1`,
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
          examples: [
            `${API_URL}/users/likes/277`,
            `${API_URL}/users/likes/277?orderby=UserFirstname`,
          ],
        },
        {
          endpoint: '/likedby/{id}',
          description:
            'Returns the set of users liked (or disliked) by the user identified by the id provided',
          examples: [
            `${API_URL}/users/likedby/277`,
            `${API_URL}/users/likedby/277?UserLikeAffinityName=Like`,
          ],
        },
        {
          endpoint: '/wholike/{id}',
          description:
            'Returns the set of users who like (or dislike) the user identified by the id provided',
          examples: [
            `${API_URL}/users/wholike/277`,
            `${API_URL}/users/wholike/277?UserLikeAffinityID=2`,
          ],
        },
        {
          endpoint: '/assessments/{aid}/proposedby/{uid}',
          description:
            'Returns the set of proposees who were proposed for a specific assessment by a specific proposer',
          examples: [
            `${API_URL}/users/assessments/13/proposedby/277`,
            `${API_URL}/users/assessments/13/proposedby/277?UserProposalConfirmationName=Confirmed`,
          ],
        },
        {
          endpoint: '/assessments/{aid}/whoproposed/{uid}',
          description:
            'Returns the set of proposers who proposed a specific proposee for a specific assessment',
          examples: [
            `${API_URL}/users/assessments/13/whoproposed/527`,
            `${API_URL}/users/assessments/13/whoproposed/527?UserProposalConfirmationID=0`,
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
