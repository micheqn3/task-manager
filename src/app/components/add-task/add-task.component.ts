import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // Form data
  // Using ngModel in HTML to allow two way binding
  text: string;
  day: string;
  reminder: boolean = false;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // On form submit, save form data to an object and emit onAddTask event for parent to see
  onSubmit() {

    if (!this.text || !this.day) {
      alert('Please provide all values.');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.text = ''
    this.day = ''
    this.reminder = false;

    this.onAddTask.emit(newTask);
  }
}
