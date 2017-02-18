import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required fields
    if(!this.validateService.validateRegister(user)){
      console.log('sdf');
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      console.log('sdf EMAIL');
      return false;
    }

  }

}
