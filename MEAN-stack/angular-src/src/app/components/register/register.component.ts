import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    // Flash messages for required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Some of the fields are empty. Please fill in all fields.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Not a valid Email. Please fill in a valid Email.', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }

    // Register new user
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Account registered. You can now log in.', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong.', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/register']);
      }
    });
  }
}
