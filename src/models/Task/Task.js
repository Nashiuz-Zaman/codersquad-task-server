import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
   title: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   deadline: {
      type: Date,
      required: true,
   },
   priorityLevel: {
      type: Number,
      required: true,
   },
   statusLevel: {
      type: Number,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   lastUpdated: {
      type: Date,
      required: true,
   },
});

const TaskModel = model('Task', taskSchema);
export default TaskModel;
