import { Injectable,ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import "rxjs/add/operator/catch";
import "axjs/add/observable/throw";


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) {

   }
   getTodoData () {
    let url = "https://jsonplaceholder.typicode.com/todos/" ;
    return this.http.get(url)
    .catch((error)=>{
      return Observable.throw(error);
    })

   
    }
    
  }
    

    
    
  

