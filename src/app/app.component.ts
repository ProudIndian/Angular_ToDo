import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  btnText = '';
  newItem  = '';
  todolist: string[] = new Array('Have Breakfast', 'Watch TV', 'Have Lunch', 'Go To Work');
  addToList(addlist: NgForm) {
   this.todolist.push(addlist.value.createInput);
   addlist.resetForm();
  }
}
