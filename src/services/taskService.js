const Task = require('../models/Task');

const createTask = async (data, userId) => {
  return await Task.create({ ...data, user: userId });
};

const getTasksByUser = async (userId) => {
  return await Task.find({ user: userId });
};

const getTaskById = async (taskId, userId) => {
  const task = await Task.findOne({ _id: taskId, user: userId });
  if (!task) throw new Error('Tarefa não encontrada');
  return task;
};

const updateTask = async (taskId, userId, data) => {
  const task = await Task.findOneAndUpdate(
    { _id: taskId, user: userId },
    data,
    { new: true }
  );
  if (!task) throw new Error('Tarefa não encontrada para atualização');
  return task;
};

const deleteTask = async (taskId, userId) => {
  const task = await Task.findOneAndDelete({ _id: taskId, user: userId });
  if (!task) throw new Error('Tarefa não encontrada para remoção');
  return task;
};

module.exports = {
  createTask,
  getTasksByUser,
  getTaskById,
  updateTask,
  deleteTask,
};