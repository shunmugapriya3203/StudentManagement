import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  
  constructor(private service: StudentServiceService) {} // Injecting the service
  student: Student[] = [];
  students: Student=new Student();

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

  updateStudent()
{
  const id=this.students.id;
  const data=this.service.updateStudent(id,this.students);
  data.subscribe(
    (response:any) => {
      console.log("Student Upadated successfully!"+response);
      alert('Student Upadated successfully');
    },
    (error) => {
      console.error("Error updating students:", error);
      alert('Error updating students:');
    }
  );
}

}
