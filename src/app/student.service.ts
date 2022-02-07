import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { StudentComponent } from './student/student.component';
import { Student} from './Student';
const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
type NewType = HttpClient;

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  constructor(private http: HttpClient) {

    
  }
 
  baseUrl:string = 'http://localhost:8080/students/'; // Get All Users 
  getUsers(){ return this.http.get<Student[]>(this.baseUrl+'allStudent/'); } // Get User By Id 
  getUserById(studentId: number){ return this.http.get<Student>(this.baseUrl+studentId); } // Create User 
  createUser(student: Student) { return this.http.post(this.baseUrl, student); } 
  updateUser(student: Student) { return this.http.put(this.baseUrl +  student.studentId, student); }
// Delete User 
deleteUser(studentId: number) { return this.http.delete(this.baseUrl + studentId); } 
}
