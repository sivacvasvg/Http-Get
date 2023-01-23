import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {

   }
   getTodoData (todoId:number =1) {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
    
   }
}
