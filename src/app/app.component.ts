import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoModel } from '../models/todo.model';
import { TodoService } from '../services/todoService/todo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todolist: TodoModel[];
  newItem = '';
  constructor(private _TodoService: TodoService) { }
  addToList(addlist: NgForm) {
    const List: any = this.todolist;
    let maxId = List.reduce(function (prev, curr) {
      return prev.id > curr.id ? prev : curr;
    });
    List.push({ id: maxId++, value: addlist.value.createInput });
    addlist.resetForm();
  }
  ngOnInit() {
    this._TodoService.getResumeDetails()
      .subscribe(response => this.todolist = response);
  }
}

