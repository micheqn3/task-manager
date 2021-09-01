// Button class

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text: string; 
  @Input() color: string;

  // Allows for reusability as we need this button to have different functionalities
  @Output() btnClick = new EventEmitter();

  constructor() { }

  // Life cycle method that runs when the component loads
  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit()
  }

}
