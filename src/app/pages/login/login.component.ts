import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;

  constructor(private authService: AuthServiceService, private route: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createAuth();
  }


  /**
   * CREANDO EL FORM
   */

  createAuth():void{
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    })
  }

  /**
   * LOGIN
   */

  handleLogin(){
    const formData={
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    console.log(formData.email);
    console.log(formData.password);

    this.authService.logInWithEmail(formData.email,formData.password).then((user)=>{
      if(user){
        this.route.navigate(['/home']);
      }
    })
  }

}
