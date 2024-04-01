// imports
import UserModel from '../models/User/User.js';

const checkEmailExists = async email => {
   // check if we can find a user with the email
   const user = await UserModel.findOne({ email });

   if (user) {
      return true;
   } else {
      return false;
   }
};

export default checkEmailExists;
