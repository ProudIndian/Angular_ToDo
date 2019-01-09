import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Itodo } from '../../interfaces/todo.interface';


@Injectable()
export class TodoService {
    private _url = 'src/services/todoService/todo.json';
    constructor(private _http: HttpClient) {
    }
    getTodoList() {
        return this._http.get(this._url).
        pipe(
           map((response: Itodo[]) => response));
     }
}
