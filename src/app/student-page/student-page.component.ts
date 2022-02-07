import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
import { StudentPageModel } from './student-page.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {
  public studentForm!: FormGroup;
  studentPageModelObj:StudentPageModel=new StudentPageModel();
  studentData!:any;
  // showAdd!:boolean;
  // showUpdate!:boolean;
  
 

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router,private api:ApiService) { }
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}), observe: 'response'}
  ngOnInit(): void {
    this.studentForm=this.formBuilder.group({
      studentName: ['', Validators.required],
studentEmail:  ['', Validators.required],
studentUserName: ['', Validators.required],
studentPassword:['', Validators.required],
studentPhone: ['', Validators.required],
studentAddress:['', Validators.required]

    })
    this.getAllStudent();
  }
  // clickPostStudent(){
  //   this.studentForm.reset();
  //   this.showAdd=true;
  //   this.showUpdate=false;
  // }
  postStudentDetails(){
    this.studentPageModelObj.studentName=this.studentForm.value.studentName;
    this.studentPageModelObj.studentEmail=this.studentForm.value.studentEmail;
    this.studentPageModelObj.studentUserName=this.studentForm.value.studentUserName;
    this.studentPageModelObj.studentPassword=this.studentForm.value.studentPassword;
    this.studentPageModelObj.studentPhone=this.studentForm.value.studentPhone;
    this.studentPageModelObj.studentAddress=this.studentForm.value.studentAddress;

    this.api.postStudent(this.studentPageModelObj)
    .subscribe(res => {
      console.log(res);
      alert("Student Added Successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.studentForm.reset();
      this.router.navigate(['studentTable']);
      
    },
     ()=>{
      alert("Student added");
      this.router.navigate(['studentTable']);
    })
  }
  getAllStudent(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData=res;


    })
  }
  deleteStudent(row:any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("employee Deleted");
      this.getAllStudent();
    })
  }
  onEdit(row:any){
    // this.showAdd=false;
    // this.showUpdate=true;
    this.studentPageModelObj.studentId=row.id;
    this.studentForm.controls['studentName'].setValue(row.studentName);
    this.studentForm.controls['studentEmail'].setValue(row.studentEmail);
    this.studentForm.controls['studentUserName'].setValue(row.studentUserName);
    this.studentForm.controls['studentPassword'].setValue(row.studentPassword);
    this.studentForm.controls['studentPhone'].setValue(row.studentPhone);
    this.studentForm.controls['studentAddress'].setValue(row.studentAddress);

  }
  updateStudentDetails(){
    this.studentPageModelObj.studentName=this.studentForm.value.studentName;
    this.studentPageModelObj.studentEmail=this.studentForm.value.studentEmail;
    this.studentPageModelObj.studentUserName=this.studentForm.value.studentUserName;
    this.studentPageModelObj.studentPassword=this.studentForm.value.studentPassword;
    this.studentPageModelObj.studentPhone=this.studentForm.value.studentPhone;
    this.studentPageModelObj.studentAddress=this.studentForm.value.studentAddress;
    this.api.editStudent(this.studentPageModelObj,this.studentPageModelObj.studentId)
    .subscribe(res=>
      {
        alert("updatedSuccessFully");
        let ref=document.getElementById('cancel')
      ref?.click();
      this.studentForm.reset();
      this.router.navigate(['login']);
      })

  }
}
 