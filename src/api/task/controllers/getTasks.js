import TaskModel from './../../../models/Task/Task.js';

const getTasks = async (req, res) => {
   try {
      // verify
      const { email, status, limit, skip } = req.query;
      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }

      const filter = { email: email, statusLevel: parseInt(status) };
      const sortOption = { lastUpdated: 1 };

      const tasksDataQuery = TaskModel.find(filter)
         .sort(sortOption)
         .skip(parseInt(skip))
         .limit(parseInt(limit));
      const tasksCountQuery = TaskModel.countDocuments(filter);

      const [tasks, count] = await Promise.all([
         tasksDataQuery.exec(),
         tasksCountQuery.exec(),
      ]);

      return res.send({ status: 'success', tasks, count });
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default getTasks;
