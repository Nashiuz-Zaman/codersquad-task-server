import TaskModel from './../../../models/Task/Task.js';

// basically updating a single task's status and lastUpdated
const deleteTask = async (req, res) => {
   try {
      // verify
      const email = req.query.email;
      if (req.decoded.email !== email) {
         return res
            .status(403)
            .send({ status: 'error', message: 'Forbidden Access' });
      }
      // gather data
      const id = req.params.id;
      const filter = { _id: id };
      const result = await TaskModel.deleteOne(filter);

      if (!result.deletedCount) {
         return res
            .status(404)
            .send({ status: 'failed', message: 'Task not deleted' });
      }

      const sortOption = { lastUpdated: 1 };
      const newTasks = await TaskModel.find({ email: email }).sort(sortOption);

      return res.send({ status: 'success', updatedTasks: newTasks });
   } catch (error) {
      return res.status(500).send({ status: 'error' });
   }
};

export default deleteTask;
