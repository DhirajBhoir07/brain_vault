import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';





@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private snackbar: MatSnackBar) { }

  onLogin() {
    console.log('Login Data:', this.loginData);
    if (this.loginData.username === '' && this.loginData.password === '') {
      this.snackbar.open('Please fill all fields', 'Close', { duration: 2000, verticalPosition: 'top' });
      return;
    }

    // Dummy validation (replace with API call)
    if (this.loginData.username && this.loginData.password) {
      this.snackbar.open('Login Successful! Navigating to dashboard...', 'Close', { duration: 2000 });
    } else {
      this.snackbar.open('Login Failed..!', 'Close', { duration: 2000 });
    }
  }



}
