import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import  firebase  from 'firebase';
import { Observable, throwError } from 'rxjs';
import { EmailValidator, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root' 
})
export class AuthServiceService {

  constructor(private QRauth: AngularFireAuth | null, private route: Router, private formBuilder:FormBuilder) {

   }

   /**
   * CREATING USER WITH GOOGLE REGISTER
   */

  async registerWithGoogleAuth(): Promise<firebase.User | null>{
    
    try{
      const authProvider = new firebase.auth.GoogleAuthProvider();

      const response = await this.QRauth.signInWithPopup(authProvider);
      console.log(JSON.stringify(response));

      if  (response.user){
        localStorage.setItem('user',response.user.uid);
      }
      this.route.navigate(['/home'])

      return response.user;

    }catch(err){

      localStorage.removeItem('user');
      throw(err);

    }
    
  }

  /**
   * GETTING CURRENT USER
   */

  getCurrentUser(): Observable<firebase.User | null>{
    return this.QRauth.user;
  }

  /**
   * LOGIN OUT CURRENT USER
   */
  
  async logOut(): Promise<void>{

    try{
      await this.QRauth.signOut();
      localStorage.removeItem('user');
    }catch(err){
      throw(err);
    }
  }

  /**
   * LOGIN WITH EMAIL
   */

  async logInWithEmail(email:string, password:string): Promise<firebase.User | null>{

    try{
      const response = await this.QRauth.signInWithEmailAndPassword(email,password);
      if(response.user){
        localStorage.setItem('user',response.user.uid);
      }

    return response.user;
      
    }catch(err){
      localStorage.removeItem('user');
      throw('no se puede ingresar con este usuario');
    }

   }
}
