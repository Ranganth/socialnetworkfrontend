import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), observe: 'response'}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }
  loginStudent(){
    this.http.post<any>(" http://localhost:8080/students/loginStudent/",this.loginForm.value)
    .subscribe({
      next: res=>{
      alert("Login successfully");
      this.loginForm.reset();
      this.router.navigate(['logout']);
    },error: err=>{
      alert("Something went wrong");
    }
    })

  }
  

}
