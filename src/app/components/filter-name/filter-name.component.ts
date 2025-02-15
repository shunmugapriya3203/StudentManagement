import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-filter-name',
  templateUrl: './filter-name.component.html',
  styleUrls: ['./filter-name.component.scss']
})
export class FilterNameComponent {

students:Student[]=[];
studentName:any;

constructor(private service: StudentServiceService){}

ngOnInit(): void{

}

  getByName(studentName:string){
    const getName=this.service.getByName(studentName);
    getName.subscribe(
      (res:any) =>{
        console.log("GetNameBy Response",res);
        this.students=res as Student[];
        //this.getAll();
      },
      (error:any) =>
      {
        console.error("Data not found",error)
      }
    );
    
  }

}
