// imports
import express from 'express';

// controllers
import emailLogin from '../../api/auth/controllers/emailLogin.js';
import initialAuthValidation from '../../api/auth/controllers/initialAuthValidation.js';
import logout from '../../api/auth/controllers/logout.js';
import protectRoute from '../../api/auth/controllers/protectRoute.js';

// middlewares
import verifyToken from './../../middlewares/verifyToken.js';

// create router
const authRouter = express.Router();

// routes
authRouter.get('/validate', verifyToken, initialAuthValidation);
authRouter.post('/email-login', emailLogin);
authRouter.patch('/logout', logout);
authRouter.get('/route', protectRoute);

export default authRouter;
