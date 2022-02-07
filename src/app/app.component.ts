import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   studentForm=new FormGroup({
//     studentName:new FormControl ('', Validators.required),
// studentEmail:new FormControl  ('', Validators.required),
// studentUserName:new FormControl ('', Validators.required),
// studentPassword:new FormControl('', Validators.required),
// studentPhone: new FormControl('', Validators.required),
// studentAddress:new FormControl('', Validators.required)

//   })
// get studentName(){
//   return this.studentForm.get('studentName')
// }
  
 
  title = 'collegesocialnetwork';

}
