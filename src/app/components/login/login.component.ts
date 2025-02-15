import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentServiceService } from 'src/app/service/student-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(
    private service: StudentServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getLogin();
  }


  getLogin(){
    const data=this.service.login(this.username,this.password);
    data.subscribe(
      (res:any) => {
       if(res === "Correct Username and Password"){
        this.router.navigate(['/dashboard']);
        alert("Login successfully!!");
       }
       else{
        this.errorMessage="Wrong Username or Password";
        alert("Wrong Username and Password")
       }
     },
      (error:any) =>{
        this.errorMessage = "An error occurred during login. Please try again.";
        console.error(error);
     }
   );
 }
}
