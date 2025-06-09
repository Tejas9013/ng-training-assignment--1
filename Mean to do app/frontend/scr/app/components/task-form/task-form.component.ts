import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() taskSaved = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  taskForm!: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: [this.task?.title || '', Validators.required],
      description: [this.task?.description || ''],
      status: [this.task?.status || 'pending'],
      priority: [this.task?.priority || 'normal'],
      dueDate: [this.task?.dueDate || ''],
      assignedTo: [this.task?.assignedTo || ''],
      comments: [this.task?.comments || '']
    });
  }

  onSubmit(): void {
    if (this.taskForm.invalid) return;
    const formValue = this.taskForm.value;
    if (this.task && this.task._id) {
      this.taskService.updateTask(this.task._id, formValue).subscribe(() => {
        this.taskSaved.emit();
      });
    } else {
      this.taskService.addTask(formValue).subscribe(() => {
        this.taskForm.reset();
        this.taskSaved.emit();
      });
    }
  }

  onCancel(): void {
    this.cancelEdit.emit();
  }
}
