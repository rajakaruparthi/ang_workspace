import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUp } from './signup.model';
import { UserRegService } from '../../user-reg.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private uService: UserRegService) { }

  ngOnInit() {
  }

  onSubmit(formData: NgForm){
    let value= formData.value;
     const user = new SignUp(value.email, value.password, value.phone);
     this.uService.registerUser(user); 
  }
}
