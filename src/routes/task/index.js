// imports
import express from 'express';

// controller
import getTasks from '../../api/task/controllers/getTasks.js';
import deleteTask from './../../api/task/controllers/deleteTask.js';
import createTask from './../../api/task/controllers/createTask.js';
import editTask from './../../api/task/controllers/editTask.js';

// middlewares
import verifyToken from '../../middlewares/verifyToken.js';

// create router
const taskRouter = express.Router();

// routes
taskRouter.get('/tasks', verifyToken, getTasks);
taskRouter.post('/tasks', verifyToken, createTask);
taskRouter.put('/tasks/edit/:id', verifyToken, editTask);
taskRouter.delete('/tasks/delete/:id', verifyToken, deleteTask);

export default taskRouter;
