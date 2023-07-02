import { Router } from "express";

// Endpoints -------------------------------------

const listOfEndpoints = [
  {
    endpoint: "/api/assessments",
    description: "Returns all assessments.",
  },
  {
    endpoint: "/api/assessments/{id}",
    description:
      "Returns the specific assessment identified by the id provided.",
  },
  {
    endpoint: "/api/assessments/module/{id}",
    description:
      "Returns the set of assessments associated with the module identified by the id provided.",
  },
  {
    endpoint: "/api/groups",
    description: "Returns all groups.",
  },
  {
    endpoint: "/api/groups/{id}",
    description: "Returns the specific group identified by the id provided.",
  },
  {
    endpoint: "/api/groups/project/{id}",
    description:
      "Returns the set of groups associated with the project identified by the id provided.",
  },
  {
    endpoint: "/api/groups/users/{id}",
    description:
      "Returns the set of groups associated with the user identified by the id provided.",
  },
  {
    endpoint: "/api/modules",
    description: "Returns all modules.",
  },
  {
    endpoint: "/api/modules/{id}",
    description: "Returns the specific module identified by the id provided.",
  },
  {
    endpoint: "/api/modules/leader/{id}",
    description:
      "Returns the set of modules associated with the module leader (user) identified by the id provided.",
  },
  {
    endpoint: "/api/modules/users/{id}",
    description:
      "Returns the set of modules associated with the student (user) identified by the id provided.",
  },
  {
    endpoint: "/api/projects",
    description: "Returns all projects.",
  },
  {
    endpoint: "/api/projects/{id}",
    description: "Returns the specific project identified by the id provided.",
  },
  {
    endpoint: "/api/projects/module/{id}",
    description:
      "Returns the set of projects associated with the module identified by the id provided.",
  },
  {
    endpoint: "/api/projects/users/{id}",
    description:
      "Returns the set of projects associated with the student (user) identified by the id provided.",
  },
  {
    endpoint: "/api/projectstatus",
    description: "Returns the possible set of project status values.",
  },
  {
    endpoint: "/api/users",
    description: "Returns all users.",
  },
  {
    endpoint: "/api/users/{id}",
    description: "Returns the specific users identified by the id provided.",
  },
  {
    endpoint: "/api/users/student",
    description:
      "Returns those user records associated with the usertype student.",
  },
  {
    endpoint: "/api/users/staff",
    description: "Returns those users associated with the usertype staff.",
  },
  {
    endpoint: "/api/users/usertype/{id}",
    description:
      "Returns the set of users associated with the usertype identified by the id provided.",
  },
  {
    endpoint: "/api/users/groups/{id}",
    description:
      "Returns the set of users associated with the group identified by the id provided.",
  },
  {
    endpoint: "/api/users/modules/{id}",
    description:
      "Returns the set of users associated with the module identified by the id provided.",
  },
  {
    endpoint: "/api/usertypes",
    description: "Returns the possible set of user type values.",
  },
  {
    endpoint: "/api/years",
    description: "Returns the possible set of year cohort values.",
  },
];

// Routers ---------------------------------------

export const domainRouter = new Router();

domainRouter.get("/", (req, res) =>
  res.status(200).json({
    message: "List of available endpoints",
    listOfEndpoints,
  })
);

export const defaultRouter = new Router();

defaultRouter.get("/", (req, res) =>
  res.status(200).json({
    message: "Specified endpoint not found",
    listOfEndpoints,
  })
);
