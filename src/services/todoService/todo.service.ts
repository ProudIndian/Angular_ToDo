import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    private _url = 'src/services/todoService/todo.json';
    constructor(private _http: Http) {
    }
    getResumeDetails() {
        return this._http.get(this._url).
        pipe(
           map((response: Response) => response.json()));
     }
}
