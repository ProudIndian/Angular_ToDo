import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../interfaces/todo.interface';
import { TodoService } from '../services/todoService/todo.service';
import { TodoModel } from '../models/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent implements OnInit {
  todolist: Itodo[];
  newTodo: TodoModel = {
    id: 0,
    name: ''
  };
  constructor(private _TodoService: TodoService) { }
  addToList(addlist: NgForm) {
    const List: any = this.todolist || [];
    const maxId = List.length > 1 ? List.reduce(function (prev, curr) {
      return prev.id > curr.id ? prev.id : curr.id;
    }) : List.length === 0 ? 0 : 1;
    this.newTodo = {
      id: maxId + 1,
      name: addlist.value.name
    };
    List.push(this.newTodo);
    addlist.resetForm();
  }
  ngOnInit() {
    this._TodoService.getTodoList()
      .subscribe(response => this.todolist = response);
  }
  deleteTodo(event) {
    const id = +event.target.id;
    const List: any = this.todolist;
    const removeIndex = List.map(function (item) { return item.id; }).indexOf(id);
    List.splice(removeIndex, 1);
  }
}
