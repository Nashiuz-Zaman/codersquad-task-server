// import jwt
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// load env
dotenv.config();

const generateToken = payload => {
   return jwt.sign(payload, process.env.token_secret, { expiresIn: '12h' });
};

export default generateToken;
