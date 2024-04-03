// import necessary packages
import express from 'express';
import applyMiddlewares from './middlewares/applyMiddlewares.js';

// import routes
import taskRouter from './routes/task/index.js';
import userRouter from './routes/user/index.js';
import authRouter from './routes/auth/index.js';

// app setup
const app = express();

// basic common middleware for express.json, cors
applyMiddlewares(app);

// all the routes handling is here below
app.use(taskRouter);
app.use(userRouter);
app.use(authRouter);

// test
app.get('/health', (req, res) => {
   res.send('Working properly');
});

// for all routes
app.all('*', (req, res, next) => {
   const error = new Error(`${req.url} is an invalid url`);
   error.status = 404;
   next(error);
});

// global error handling
app.use((err, req, res) => {
   res.status(err.status || 500).send({ message: err.message });
});

export default app;
