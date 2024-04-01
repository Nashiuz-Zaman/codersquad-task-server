// import necessary packages
import express from 'express';
import cors from 'cors';

const applyMiddlewares = app => {
   app.use(
      cors({
         origin: true,
      })
   );
   app.use(express.json());
};

// export
export default applyMiddlewares;
