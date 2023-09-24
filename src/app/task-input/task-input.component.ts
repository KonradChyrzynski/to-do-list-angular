import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  @Output() newTaskEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newTaskEvent.emit(value);
  }
}
