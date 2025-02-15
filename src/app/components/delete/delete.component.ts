import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private service: StudentServiceService) {} // Injecting the service
  student: Student[] = [];
  studentID:any;

  ngOnInit(): void {
    this.getAll();
  }

  // Fetching all student data
  getAll() {
    const data = this.service.getAllData();
    data.subscribe(
      (res) => {
        this.student = res as Student[];  // Storing student data
      },
      (error) => {
        console.error("Error fetching students:", error);
      }
    );
  }

  deleteStudent(studentID:number){
    const deleteReq=this.service.deleteData(studentID);
    deleteReq.subscribe(
      (res) =>{
        console.log("Delete Response",res);
        this.getAll();
      },
      (error) =>
      {
        console.error("Error Deleting Student",error)
      }
    );
    
  }

}
