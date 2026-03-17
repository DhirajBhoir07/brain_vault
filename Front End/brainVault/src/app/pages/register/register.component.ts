import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {

  registerData = {
    name: '',
    email: '',
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onRegister() {
    console.log('Register Data:', this.registerData);

    // Replace with API call
    if (
      this.registerData.name &&
      this.registerData.email &&
      this.registerData.username &&
      this.registerData.password
    ) {
      alert('Registration Successful');

      // Redirect to login
      this.router.navigate(['/login']);
    } else {
      alert('Please fill all fields');
    }
  }
}