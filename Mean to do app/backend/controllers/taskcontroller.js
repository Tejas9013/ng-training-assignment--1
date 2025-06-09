const Task = require('../models/task');

// GET /api/tasks
exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    next(err);
  }
};

// POST /api/task
exports.createTask = async (req, res, next) => {
  try {
    const { title, description, status, priority, dueDate, assignedTo, comments } = req.body;
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }
    const task = new Task({ title, description, status, priority, dueDate, assignedTo, comments });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

// PUT /api/task/:id
exports.updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(updated);
  } catch (err) {
    next(err);
  }
};

// DELETE /api/task/:id
exports.deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Task.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
