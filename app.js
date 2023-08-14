// Imports ---------------------------------------
import express from "express";
import cors from "cors";
import assessmentsRouter from "./routers/assessments-router.js";
import assessmenttypesRouter from "./routers/assessmenttypes-router.js";
import favouritesRouter from "./routers/favourites-router.js";
import groupsRouter from "./routers/groups-router.js";
import groupmembersRouter from "./routers/groupmembers-router.js";
import likesRouter from "./routers/likes-router.js";
import logsRouter from "./routers/logs-router.js";
import modulemembersRouter from "./routers/modulemembers-router.js";
import modulesRouter from "./routers/modules-router.js";
import projectsRouter from "./routers/projects-router.js";
import projectstatusRouter from "./routers/projectstatus-router.js";
import usersRouter from "./routers/users-router.js";
import usertypesRouter from "./routers/usertypes-router.js";
import yearsRouter from "./routers/years-router.js";
import { domainRouter, defaultRouter } from "./routers/default-router.js";

// Configure express app -------------------------
const app = new express();

// Configure middleware --------------------------
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints -------------------------------------

app.use("/api/assessments", assessmentsRouter);
app.use("/api/assessmenttypes", assessmenttypesRouter);
app.use("/api/favourites", favouritesRouter);
app.use("/api/groups", groupsRouter);
app.use("/api/groupmembers", groupmembersRouter);
app.use("/api/likes", likesRouter);
app.use("/api/logs", logsRouter);
app.use("/api/modulemembers", modulemembersRouter);
app.use("/api/modules", modulesRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/projectstatus", projectstatusRouter);
app.use("/api/users", usersRouter);
app.use("/api/usertypes", usertypesRouter);
app.use("/api/years", yearsRouter);
app.use("/api/", domainRouter);
app.use("/api/*", defaultRouter);

// Start server ----------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
