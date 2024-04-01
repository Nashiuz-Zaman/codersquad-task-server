// import necessary packages
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// load env
dotenv.config();

const verifyToken = (req, res, next) => {
   let token = req.headers.authorization;
  
   
   if (!token) {
      return res
         .status(401)
         .send({ status: 'error', message: 'unauthorized access' });
   }

   token = token.split(' ')[1];

   jwt.verify(token, process.env.token_secret, (err, decoded) => {
      if (err) {
         return res
            .status(401)
            .send({ status: 'error', message: 'unauthorized access' });
      }

      req.decoded = decoded;
      next();
   });
};

// export
export default verifyToken;
