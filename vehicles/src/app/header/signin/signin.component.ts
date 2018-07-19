import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSignin(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    if(this.checkCredentials(email, password)){
      this.router.navigate(["../vehicles"]);
    }
  }

  checkCredentials(email: String, password: String){
    return (email === "test@test.com" && password === "password") ? true : false;
  }
}
