import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import student from '../models/student';

const URL="http://localhost:8081/demo-0.0.1-SNAPSHOT/Student";

@Injectable({
  providedIn: 'root'
})

export class StudentServiceService{

  constructor(private http:HttpClient) { }
  

  getAllData(){
   return this.http.get(URL+"/ReadAll");
  }

  deleteData(studentID:number){
    return this.http.delete(URL+"/DeleteId?id="+studentID);
  }

  getIdData(studentID:number){
    return this.http.get(URL+"/ReadById?id="+studentID);
  }


  studentId(){
    return this.http.get(URL+"/ids");
  }
  
  getByName(studentName:string){
    return this.http.get(URL+"/ReadName?name="+studentName);
  }

  Count() {
    return this.http.get<{ "total count:": number }>(URL + "/Count"); // Adjust to match exact key
  }
  

 // Get department counts
 dept() {
  return this.http.get<{ "BSc": number; "BCA": number; "MCA": number }>(URL + "/Dept");  // Directly using the response type here
}


login(username: string, password: string){
  return this.http.post(URL + "/login", { username, password }, { responseType: 'text' });
}


  addData(student:{
    id:number;
    name:string;
    dateOfBirth:Date;
    department:string;
    year:string;
    percentage:number;})
    {
      return this.http.post(URL+"/insert",student);
    }

    updateStudent(id:number,students:any){
      return this.http.put(URL+"/Update/"+id,students);
    }


}

