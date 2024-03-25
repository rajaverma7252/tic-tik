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
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();
    
    if (userId == 'raja' && password == 'raja@123') {
      sessionStorage.setItem('login', "true");
      Swal.fire({
        text: "Login Successfully",
        icon: "success",
        backdrop: false,
        showConfirmButton: false,
        footer: 'Redirecting to home page...',
        timer: 1500,
      });
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1500);
    } else {
      Swal.fire({
        text: 'Invalid User/Password',
        icon: 'error',
        confirmButtonText: 'Try again'
      })
    }
  }
}
