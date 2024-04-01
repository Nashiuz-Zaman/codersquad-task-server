// imports
import UserModel from '../../../models/User/User.js';

const protectRoute = async (req, res) => {
   try {
      const id = req.query.id;

      // find user
      const user = await UserModel.findOne({ _id: id });

      if (!user || !user?.loggedIn) {
         return res.send({ status: 'failed' });
      }

      return res.send({ status: 'success' });
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default protectRoute;
