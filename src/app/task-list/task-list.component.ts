import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  searchTerm: string = '';
  selectedPriority: string = '';

  constructor(private readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.taskService.getTasks(100).subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.applyFilters();
      },
      error: (error) => console.error('Error fetching tasks', error),
    });
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedPriority === '' ||
          task.priority.toString() === this.selectedPriority)
    );
  }

  deleteTask(taskId: number | undefined): void {
    if (taskId) {
      this.taskService.deleteTasks([taskId]).subscribe({
        next: () => {
          this.tasks = this.tasks.filter((task) => task.id !== taskId);
          this.applyFilters();
        },
        error: (error) => console.error('Error deleting task', error),
      });
    }
  }

  getPriorityClass(priority: number): string {
    switch (priority) {
      case 1:
        return 'low';
      case 2:
        return 'medium';
      case 3:
        return 'high';
      default:
        return '';
    }
  }

  getPriorityText(priority: number): string {
    switch (priority) {
      case 1:
        return 'Low';
      case 2:
        return 'Medium';
      case 3:
        return 'High';
      default:
        return '';
    }
  }
}
