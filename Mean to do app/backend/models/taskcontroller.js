const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  priority: { type: String, enum: ['low', 'normal', 'high'], default: 'normal' },
  dueDate: { type: Date },
  assignedTo: { type: String, trim: true },
  comments: { type: String, trim: true },
}, { timestamps: true });

taskSchema.index({ status: 1, priority: 1 });

module.exports = mongoose.model('Task', taskSchema);
