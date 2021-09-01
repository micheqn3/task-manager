// Tasks class

import { Component, OnInit } from '@angular/core';

// Import our task interface and mock tasks
import { Task } from '../../Task'
import { TASKS } from '../../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;

  constructor() { }

  // Life cycle method that runs when the component loads
  ngOnInit(): void {
  }

}
