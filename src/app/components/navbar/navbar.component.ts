import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usernavbar: any; //--> tenemos activado el --strictNullChecks, user: firebase.Uner = null da error, porque no asignar null a este tipo de variable

  constructor(private authService:AuthServiceService, private route:Router) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user)=>{
      this.usernavbar=user;
    })
  }

  async HandleOut(){
    try{
      await this.authService.logOut();
      this.route.navigate(['/home']);

    }catch(err){
      throw(err);
    }
  }

}
