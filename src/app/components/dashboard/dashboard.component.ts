import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  student: Student[] = []; // Model for storing students data
  totalCount: number = 0;  // For storing the total count of students
  deptCounts: { BSc: number, BCA: number, MCA: number } = { BSc: 0, BCA: 0, MCA: 0 }; // Object for department counts

  constructor(private service: StudentServiceService) {} // Injecting the service

  ngOnInit(): void {
    this.getAll();
    this.getTotalCount();
    this.getDepartment();  // Fetch department data
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


  // Fetch the total count of students
  getTotalCount() {
    const data = this.service.Count();
    data.subscribe(
      (res) => {
        console.log("Full Count Response:", res); // Debug the response
        this.totalCount = res["total count:"] || 0;  // Adjust based on response
      },
      (error) => {
        console.error("Error fetching count:", error);
        alert("Error fetching departments: " + error.message);
      }
    );
  }

  getDepartment() {
    const data = this.service.dept();
    data.subscribe(
      (res) => {
        console.log("Department Count Response:", res); // Debug the response
        this.deptCounts.BSc = res["BSc"] || 0;
        this.deptCounts.BCA = res["BCA"] || 0;
        this.deptCounts.MCA = res["MCA"] || 0;
      },
      (error) => {
        console.error("Error fetching department counts:", error);
        alert("Error fetching departments: " + error.message);
      }
    );
  }
  

}
