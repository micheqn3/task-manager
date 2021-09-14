// Tasks class

import { Component, OnInit } from '@angular/core';

// Import our task interface and task service
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // Set tasks initial state
  tasks: Task[] = [];

  // In order to use a service, need to add it to constructor as an argument
  constructor(private taskService: TaskService) { }

  // Life cycle method that runs when the component loads
  // Will retrieve the tasks from task service
  // Subscribe to observable to constantly watch it and get notified of any data emitted
  // This will set the tasks equal to the task we get back from the observable
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  // Fires when a onDeleteTask event is emitted
  // Calls the service method to delete and filters out the tasks not equal to the one in the param
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

}
