// imports
import UserModel from '../../../models/User/User.js';

const initialAuthValidation = async (req, res) => {
   try {
      const { email } = req.decoded;

      const { _doc: { loggedIn, ...user }} = await UserModel.findOne({ email }).select('-password');
     

      if (loggedIn === true) {
         return res.send({ status: 'success', user });
      }

      return res.send({ status: 'failed' });
   } catch (error) {
      return res
         .status(500)
         .send({ status: 'error' });
   }
};

export default initialAuthValidation;
