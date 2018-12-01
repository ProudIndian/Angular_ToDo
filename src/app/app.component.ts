import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todolist: string[] = new Array('Have Breakfast', 'Watch TV', 'Have Lunch', 'Go To Work');
}
