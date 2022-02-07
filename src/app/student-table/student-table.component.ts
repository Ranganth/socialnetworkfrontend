import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { StudentPageModel } from '../student-page/student-page.model';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
  studentData!:any;
  public studentForm!: FormGroup;
  studentPageModelObj:StudentPageModel=new StudentPageModel();
  constructor(private api:ApiService,private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
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
}
