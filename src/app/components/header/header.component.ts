// Header class

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Manager';

  constructor() { }

  // Life cycle method that runs when the component loads
  ngOnInit(): void {
  }

  toggleAddTask() {
    console.log('add button');
  }

}
