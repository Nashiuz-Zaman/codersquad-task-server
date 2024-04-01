// imports
import dotenv from 'dotenv';
import http from 'http';
import app from './src/app.js';
import connectDb from './src/db/connectDb.js';

// load env
dotenv.config();

// creating server and port
const server = http.createServer(app);
const port = process.env.PORT || 5000;

const main = async () => {
   await connectDb();
   server.listen(port, () => {
      console.log('Server working');
   });
};

main();
