// import
import generateToken from '../../../utils/generateToken.js';
import UserModel from './../../../models/User/User.js';

const createUser = async (req, res) => {
   try {
      const user = req.body;
      user.loggedIn = true;

      // create user
      const {
         _doc: { password, loggedIn, ...newUser },
      } = await UserModel.create(user);

      // if user created successfully generate token
      if (newUser._id) {
         const token = generateToken({ email: newUser.email });

         return res.send({
            status: 'success',
            token,
            user: newUser,
         });
      }
   } catch (error) {
      console.log(error.message)
      return res.status(500).send({ status: 'error' });
   }
};

export default createUser;
