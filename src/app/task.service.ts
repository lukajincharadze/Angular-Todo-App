import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
  description: string;
  priority: number;
  dueDate: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:3000';
  }

  getTasks(size: number): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiUrl}/getTasks?size=${size}`);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiUrl}/add`, task);
  }

  deleteTasks(ids: number[]): Observable<any> {
    const options = {
      body: { ids },
    };
    return this.httpClient.delete(`${this.apiUrl}/delete`, options);
  }
}
