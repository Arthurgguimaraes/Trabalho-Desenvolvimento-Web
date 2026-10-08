const taskService = require('../services/taskService');
const { taskSchema } = require('../validations/taskSchema');

const create = async (req, res, next) => {
  try {
    const validatedData = taskSchema.parse(req.body);
    const task = await taskService.createTask(validatedData, req.userId);
    res.status(201).json(task);
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(400).json({ error: error.message });
  }
};

const list = async (req, res) => {
  try {
    const tasks = await taskService.getTasksByUser(req.userId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id, req.userId);
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const validatedData = taskSchema.parse(req.body);
    const task = await taskService.updateTask(req.params.id, req.userId, validatedData);
    res.json(task);
  } catch (error) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(404).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id, req.userId);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { create, list, getById, update, remove };