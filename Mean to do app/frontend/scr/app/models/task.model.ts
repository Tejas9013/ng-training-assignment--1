export interface Task {
  _id?: string;
  title: string;
  description?: string;
  status?: 'pending' | 'completed';
  priority?: 'low' | 'normal' | 'high';
  dueDate?: string;
  assignedTo?: string;
  comments?: string;
  createdAt?: string;
  updatedAt?: string;
}
