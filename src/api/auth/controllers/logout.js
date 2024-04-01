// imports
import UserModel from '../../../models/User/User.js';

const logout = async (req, res) => {
   try {
      const { email } = req.body;

      const user = await UserModel.findOne({ email });

      user.loggedIn = false;
      const updatedUser = await user.save();

      if (updatedUser) {
         return res.send({ status: 'success' });
      }
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default logout;
