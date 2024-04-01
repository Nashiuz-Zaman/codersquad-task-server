// imports
import express from 'express';

// controllers
import createUser from './../../api/user/controllers/createUser.js';
import checkUser from './../../api/user/controllers/checkUser.js';

// create router
const userRouter = express.Router();

// routes
userRouter.post('/users', createUser);
userRouter.post('/users/check-user', checkUser);

export default userRouter;
