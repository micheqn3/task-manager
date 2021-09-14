// Task-item class. Renders each task item

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // Emits so that parent component can access this event when it is clicked on
  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  // Emit to the parent component that the user double clicked on a task
  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
