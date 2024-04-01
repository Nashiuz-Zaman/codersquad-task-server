// import
import mongoose from 'mongoose';

const connection = {};

const connectDb = async () => {
   try {
      if (connection?.isConnected) {
         return;
      }

      const clientOptions = {
         serverApi: { version: '1', strict: true, deprecationErrors: true },
      };

      await mongoose.connect(process.env.DB_URI, clientOptions);
      console.log('database conncected')
      connection.isConnected = true;
   } catch (error) {
      throw new Error(error.message);
   }
};

export default connectDb;
