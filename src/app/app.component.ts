import { Component } from '@angular/core';
import { Observable } from 'rxjs';
//import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'http5';

   todos:any;

  constructor ( private _appService:AppService) {
    this._appService.getTodoData().subscribe( (data) => {
      console.log(data);
      this.todos=data;
    });
    
  }
  
 
  
}
