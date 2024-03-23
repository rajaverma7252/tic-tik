import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  userId: string = "";
  password: string = "";

  constructor(
    private router: Router
  ) { }

  login(userId: string, password: string) {
    if (userId == 'raja' && password == 'raja@123') {
      sessionStorage.setItem('login', "true");
      Swal.fire({
        // title: "Good job!",
        text: "Login Successfully",
        icon: "success",
        backdrop: false,
        showConfirmButton: false,
        footer: 'Redirecting to home page...',
        timer: 2000,
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);
    } else {
      Swal.fire({
        // title: 'Error!',
        text: 'Invalid UserId/Password',
        icon: 'error',
        confirmButtonText: 'Try again'
      })
    }
  }
}
