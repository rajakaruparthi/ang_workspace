import { Injectable } from '@angular/core';
import { SignUp } from './header/signup/signup.model';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegService {

  constructor(private http : Http) { }

  registerUser(userDetails: SignUp){
    this.http.post("http://localhost:8080/vehicles/services/signUpService/postService", userDetails)
      .subscribe(
        (response) => {
          console.log(response);
        }
      )
  }

}
