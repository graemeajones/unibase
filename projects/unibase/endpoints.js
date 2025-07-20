// Imports ---------------------------------------
import { Router } from 'express';

import assessmentsRouter from './routers/assessments-router.js';
import assessmenttypesRouter from './routers/assessmenttypes-router.js';
import attendanceRouter from './routers/attendance-router.js';
import completionRouter from './routers/completion-router.js';
import confirmationsRouter from './routers/confirmations-router.js';
import contributionsRouter from './routers/contributions-router.js';
import favouritesRouter from './routers/favourites-router.js';
import groupsRouter from './routers/groups-router.js';
import groupmembersRouter from './routers/groupmembers-router.js';
import likesRouter from './routers/likes-router.js';
import linksRouter from './routers/links-router.js';
import logsRouter from './routers/logs-router.js';
import modulemembersRouter from './routers/modulemembers-router.js';
import modulesRouter from './routers/modules-router.js';
import projectsRouter from './routers/projects-router.js';
import projectstatusRouter from './routers/projectstatus-router.js';
import proposalsRouter from './routers/proposals-router.js';
import usersRouter from './routers/users-router.js';
import usertypesRouter from './routers/usertypes-router.js';
import yearsRouter from './routers/years-router.js';

import API_URL from '#root/apiURL.js';

// Available Endpoints ---------------------------

const API_PATH = `${API_URL}/api`;

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
            `${API_PATH}/assessments`,
            `${API_PATH}/assessments?orderby=AssessmentPublishdate+DESC`,
          ],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific assessment identified by the id provided',
          examples: [`${API_PATH}/assessments/1`],
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of assessments associated with the module identified by the id provided',
          examples: [`${API_PATH}/assessments/module/1`],
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of assessments associated with all the modules led by the staff member identified by the id provided',
          examples: [`${API_PATH}/assessments/leader/824`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of assessments associated with the user identified by the id provided',
          examples: [
            `${API_PATH}/assessments/users/277`,
            `${API_PATH}/assessments/users/277?orderby=AssessmentPublishdate`,
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
          examples: [`${API_PATH}/assessmenttypes`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific assessment type identified by the id provided',
          examples: [`${API_PATH}/assessmenttypes/1`],
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
          examples: [`${API_PATH}/attendance`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific attendance type identified by the id provided',
          examples: [`${API_PATH}/attendance/1`],
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
          examples: [`${API_PATH}/completion`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific completion type identified by the id provided',
          examples: [`${API_PATH}/completion/1`],
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
          examples: `${API_PATH}/confirmations`,
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific confirmation identified by the id provided',
          examples: `${API_PATH}/confirmations/1`,
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
          examples: [`${API_PATH}/contributions`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific contribution identified by the id provided',
          examples: [`${API_PATH}/contributions/1`],
        },
        {
          endpoint: '/log/{id}',
          description:
            'Returns the set of contributions associated with the log identified by the id provided',
          examples: [`${API_PATH}/contributions/log/6`],
        },
        {
          endpoint: '/group/{id}',
          description:
            'Returns the set of contributions associated with the group identified by the id provided',
          examples: [`${API_PATH}/contributions/group/1`],
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
          examples: [`${API_PATH}/favourites`, `${API_PATH}/favourites?FavouriteCategory=Groups`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific favourite identified by the id provided',
          examples: [`${API_PATH}/favourites/1`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of favourites associated with the user identified by the id provided',
          examples: [
            `${API_PATH}/favourites/users/277`,
            `${API_PATH}/favourites/users/277?FavouriteCategory=Assessments`,
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
          examples: [`${API_PATH}/groups`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific group identified by the id provided',
          examples: [`${API_PATH}/groups/1`],
        },
        {
          endpoint: '/assessment/{id}',
          description:
            'Returns the set of groups associated with the assessment identified by the id provided.',
          examples: [`${API_PATH}/groups/assessment/10`],
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of groups associated with the module identified by the id provided.',
          examples: [`${API_PATH}/groups/module/4`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of groups associated with the user identified by the id provided.',
          examples: [`${API_PATH}/groups/users/276`],
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
          examples: [`${API_PATH}/groupmembers`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific group member record identified by the id provided',
          examples: [`${API_PATH}/groupmembers/572`],
        },
        {
          endpoint: '/group/{id}',
          description:
            'Returns the set of group member records associated with the group identified by the id provided.',
          examples: [`${API_PATH}/groupmembers/group/12`],
        },
        {
          endpoint: '/user/{id}',
          description:
            'Returns the set of group member records associated with the user identified by the id provided.',
          examples: [`${API_PATH}/groupmembers/user/276`],
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
          examples: [`${API_PATH}/likes`, `${API_PATH}/likes?LikeAffinityName=Like`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific like record identified by the id provided',
          examples: [`${API_PATH}/likes/1580`],
        },
        {
          endpoint: '/users/{id}/likedby',
          description:
            'Returns the set of like/dislike records generated by the student identified by the id provided',
          examples: [
            `${API_PATH}/likes/users/277/likedby`,
            `${API_PATH}/likes/users/277/likedby?LikeAffinityName=Like`,
            `${API_PATH}/likes/users/277/likedby?LikeAffinityID=2`,
          ],
        },
        {
          endpoint: '/users/{id}/wholikes',
          description:
            'Returns the set of like records indicating those students who liked/disliked the specific user identified by the id provided',
          examples: [`${API_PATH}/likes/users/277/wholikes`],
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
    entity: 'Links',
    sap: '/api/links',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns all links records',
          examples: [`${API_PATH}/links`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific link record identified by the id provided',
          examples: [`${API_PATH}/links/1`],
        },
      ],
      post: {
        endpoint: '/',
        description: 'Insert a new link record',
      },
      put: {
        endpoint: '/{id}',
        description: 'Update the specific link record identified by the id provided',
      },
      delete: {
        endpoint: '/{id}',
        description: 'Delete the specific link record identified by the id provided',
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
          examples: [`${API_PATH}/logs`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific log identified by the id provided',
          examples: [`${API_PATH}/logs/1`],
        },
        {
          endpoint: '/group/{id}',
          description:
            'Returns the set of logs associated with the group identified by the id provided',
          examples: [`${API_PATH}/logs/group/1`],
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
          examples: [`${API_PATH}/modules`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific module identified by the id provided',
          examples: [`${API_PATH}/modules/1`],
        },
        {
          endpoint: '/leader/{id}',
          description:
            'Returns the set of modules associated with the module leader (user) identified by the id provided',
          examples: [`${API_PATH}/modules/leader/824`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of modules associated with the student (user) identified by the id provided',
          examples: [`${API_PATH}/modules/users/277`],
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
          examples: [`${API_PATH}/modulemembers`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific module member record identified by the id provided',
          examples: [`${API_PATH}/modulemembers/2`],
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of module member records associated with the module identified by the id provided.',
          examples: [`${API_PATH}/modulemembers/module/1`],
        },
        {
          endpoint: '/user/{id}',
          description:
            'Returns the set of module member records associated with the user identified by the id provided.',
          examples: [`${API_PATH}/modulemembers/user/276`],
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
          examples: [`${API_PATH}/projects`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific project identified by the id provided',
          examples: [`${API_PATH}/projects/1`],
        },
        {
          endpoint: '/module/{id}',
          description:
            'Returns the set of projects associated with the module identified by the id provided',
          examples: [`${API_PATH}/projects/module/4`],
        },
        {
          endpoint: '/users/{id}',
          description:
            'Returns the set of projects associated with the student (user) identified by the id provided',
          examples: [`${API_PATH}/projects/users/277`],
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
          examples: [`${API_PATH}/projectstatus`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific project status identified by the id provided',
          examples: [`${API_PATH}/projectstatus/1`],
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
          examples: [`${API_PATH}/proposals`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific proposal identified by the id provided',
          examples: [`${API_PATH}/proposals/2`],
        },
        {
          endpoint: '/assessments/{id}',
          description:
            'Returns the set of proposals associated with the specific assessment identified by the id provided',
          examples: [`${API_PATH}/proposals/assessments/13`],
        },
        {
          endpoint: '/assessments/{aid}/users/{uid}/proposedby',
          description:
            'Returns the set of proposals generated by a specific student for a specific assessment',
          examples: [`${API_PATH}/proposals/assessments/13/proposedby/278`],
        },
        {
          endpoint: '/assessments/{aid}/users/{id}/whoproposed',
          description:
            'Returns the set of proposals indicating those students who proposed a specific student for a specific assessment',
          examples: [`${API_PATH}/proposals/assessments/13/whoproposed/287`],
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
          examples: [`${API_PATH}/users`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific user identified by the id provided',
          examples: [`${API_PATH}/users/276`],
        },
        {
          endpoint: '/student',
          description: 'Returns those user records associated with the usertype student',
          examples: [`${API_PATH}/users/student`],
        },
        {
          endpoint: '/staff',
          description: 'Returns those user records associated with the usertype staff',
          examples: [`${API_PATH}/users/staff`],
        },
        {
          endpoint: '/usertype/{id}',
          description:
            'Returns the set of users associated with the usertype identified by the id provided',
          examples: [`${API_PATH}/users/usertype/1`],
        },
        {
          endpoint: '/modules/{id}',
          description:
            'Returns the set of users associated with the module identified by the id provided',
          examples: [`${API_PATH}/users/modules/4`],
        },
        {
          endpoint: '/groups/{id}',
          description:
            'Returns the set of users associated with the group identified by the id provided',
          examples: [`${API_PATH}/users/groups/1`],
        },
        {
          endpoint: '/modules/{mid}/likes/{uid}',
          description: 'Returns the set of users in a specific module liked by a specific user',
          examples: [`${API_PATH}/users/modules/4/likes/277`],
        },
        {
          endpoint: '/likes/{id}',
          description:
            'Returns all student users augmented with like information relative to the user identified by the id provided',
          examples: [
            `${API_PATH}/users/likes/277`,
            `${API_PATH}/users/likes/277?orderby=UserFirstname`,
          ],
        },
        {
          endpoint: '/likedby/{id}',
          description:
            'Returns the set of users liked (or disliked) by the user identified by the id provided',
          examples: [
            `${API_PATH}/users/likedby/277`,
            `${API_PATH}/users/likedby/277?UserLikeAffinityName=Like`,
          ],
        },
        {
          endpoint: '/wholike/{id}',
          description:
            'Returns the set of users who like (or dislike) the user identified by the id provided',
          examples: [
            `${API_PATH}/users/wholike/277`,
            `${API_PATH}/users/wholike/277?UserLikeAffinityID=2`,
          ],
        },
        {
          endpoint: '/assessments/{aid}/proposedby/{uid}',
          description:
            'Returns the set of proposees who were proposed for a specific assessment by a specific proposer',
          examples: [
            `${API_PATH}/users/assessments/13/proposedby/278`,
            `${API_PATH}/users/assessments/13/proposedby/278?UserProposalConfirmationName=Confirmed`,
          ],
        },
        {
          endpoint: '/assessments/{aid}/whoproposed/{uid}',
          description:
            'Returns the set of proposers who proposed a specific proposee for a specific assessment',
          examples: [
            `${API_PATH}/users/assessments/13/whoproposed/287`,
            `${API_PATH}/users/assessments/13/whoproposed/287?UserProposalConfirmationID=0`,
          ],
        },
        {
          endpoint: '/assessments/{aid}/notinagroup',
          description:
            'Returns the set of students not assigned to group for a specific assessment',
          examples: [`${API_PATH}/users/assessments/10/notinagroup`],
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
    sap: '/api/usertypes',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns the possible set of user type values',
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
  {
    entity: 'Years',
    sap: '/api/years',
    services: {
      get: [
        {
          endpoint: '/',
          description: 'Returns the possible set of year records',
          examples: [`${API_PATH}/years`],
        },
        {
          endpoint: '/{id}',
          description: 'Returns the specific year record identified by the id provided',
          examples: [`${API_PATH}/years/1`],
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

// Endpoints -------------------------------------

const router = new Router({ mergeParams: true });

router.use('/assessments', assessmentsRouter);
router.use('/assessmenttypes', assessmenttypesRouter);
router.use('/attendance', attendanceRouter);
router.use('/completion', completionRouter);
router.use('/confirmations', confirmationsRouter);
router.use('/contributions', contributionsRouter);
router.use('/favourites', favouritesRouter);
router.use('/groups', groupsRouter);
router.use('/groupmembers', groupmembersRouter);
router.use('/likes', likesRouter);
router.use('/links', linksRouter);
router.use('/logs', logsRouter);
router.use('/modulemembers', modulemembersRouter);
router.use('/modules', modulesRouter);
router.use('/projects', projectsRouter);
router.use('/projectstatus', projectstatusRouter);
router.use('/proposals', proposalsRouter);
router.use('/users', usersRouter);
router.use('/usertypes', usertypesRouter);
router.use('/years', yearsRouter);

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
