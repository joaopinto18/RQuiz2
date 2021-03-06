import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formAuth!:FormGroup;

  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  /**
   * REGISTER WITH GOOGLE
   */

  registerWithGoogle(){
    console.log('registrandose con Google');
    this.authService.registerWithGoogleAuth();
    this.authService.getCurrentUser().subscribe((user)=>{user.updatePassword("joao")});
  };

}
