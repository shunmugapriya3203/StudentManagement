import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private service: StudentServiceService) {} // Injecting the service
  student: Student=new Student();
  studentID:any;
  studentIDs: Student[] = 
  [];

  ngOnInit(): void {
    //this.getAll();
    this.IdData();
  }

  // Fetching all student data
  // getAll() {
  //   const data = this.service.getAllData();
  //   data.subscribe(
  //     (res) => {
  //       this.student = res as Student[];  // Storing student data
  //     },
  //     (error) => {
  //       console.error("Error fetching students:", error);
  //     }
  //   );
  // }

  getById(studentID:number){

    const getId=this.service.getIdData(studentID);
    getId.subscribe(
      (res:any) =>{
        console.log("GetById Response",res);
        this.student=res as Student;
        //this.getAll();
        
      },
      (error:any) =>
      {
        console.error("Data not found",error)
      }
    );
    
  }

  IdData(){
    console.log("Get Id");
    const getId=this.service.studentId();
    getId.subscribe(
      (res:any) =>{
        console.log("GetById Response",res);
        this.studentIDs=res as Student[];
        //this.getAll();
      },
      (error:any) =>
      {
        console.error("Data not found",error)
      }
    );
    
  }

}
