// imports
import UserModel from '../../../models/User/User.js';
import generateToken from '../../../utils/generateToken.js';

const emailLogin = async (req, res) => {
   try {
      const { email, password: userPassword } = req.body;

      // find user
      const user = await UserModel.findOne({ email });

      // if no user
      if (!user) {
         return res.send({ status: 'failed', message: "User doesn't exist" });
      }

      // if wrong password
      if (user?.password !== userPassword) {
         return res.send({ status: 'failed', message: 'Wrong Password' });
      }

      user.loggedIn = true;
      const {
         _doc: { password, loggedIn, ...updatedUser },
      } = await user.save();

      const token = generateToken({ email });
      return res.send({ status: 'success', user: updatedUser, token });
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default emailLogin;
