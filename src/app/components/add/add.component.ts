import { Component } from '@angular/core';
import Student from 'src/app/models/student';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent{

  student: Student=new Student(); //models(entity) object
  constructor(private service: StudentServiceService) //service object
  {}

  ngOnInit(): void{
  }

  add(){
    
    const data=this.service.addData(this.student); // Calls the addData method from the service and passes `this.student` as input.
    data.subscribe(
       (res:any) => {
        console.log(res);
        alert("Insert successfully!!");
      },

       (error:any) =>{
        console.error("Error");
        alert("Failed to adding data");
      }

    );
  }

}
