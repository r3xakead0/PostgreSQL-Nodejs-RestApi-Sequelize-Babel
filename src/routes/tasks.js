import { Router } from "express";
const router = Router();

import { createTask, getTasks, getOneTask, deleteTask, updateTask, getTasksByProject } from "../controllers/task.controller";

// /api/tasks/
router.post('/', createTask);
router.get('/', getTasks);

// /api/tasks/:projectID
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);

// /api/tasks/project/:projectID
router.get('/project/:projectid', getTasksByProject);

export default router;