// Task service will share data to components

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Private property for api url
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  // An observable is an interface that can handle asynchronous operations
  // Returns an observable of the tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Removes task from json server DB and returns observable of tasks
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }
}
