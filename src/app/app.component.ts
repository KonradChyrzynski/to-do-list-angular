import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-app-kc';

  tasks: string[] = [];

  addTask(newTask: string)
  {
    this.tasks.push(newTask)
  }

}
