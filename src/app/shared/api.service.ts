import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { map}  from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postStudent(data:any){
    return this.http.post<any>("http://localhost:8080/students/",data)
    .pipe(map((res:any)=>{
    return res;
  }))
  }
  getStudent(){
    return this.http.get<any>("http://localhost:8080/students/")
    .pipe(map((res:any)=>
    {
return res;
    }))
  }
  editStudent(data:any,id:number){
    return this.http.put<any>("http://localhost:8080/students/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:8080/students/deleteById/1"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}