import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { FormGroup,FormControl,FormControlName } from '@angular/forms';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http5';

   todos:any;
   errorMessage:string="Lpadoing";

  constructor ( private _appService:AppService) {
   
    
  }
  
 ngOnInit(): void {
  this._appService.getTodoData().subscribe( (data) => {
    console.log(data);
    this.todos=data;
  },(err)=>{
    this.errorMessage ="Some internal Issue"
    
  });
 }
  
}
 