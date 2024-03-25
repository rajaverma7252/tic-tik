import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  audio: any;
  audioEnable: boolean = false;
  constructor(public router: Router) { }

  playAudio(){
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();

    this.audio = new Audio();
    this.audio.src = "./assets/mp3/music.mp3";
    this.audio.loop = true;
    this.audio.play();
    this.audioEnable = true;
  }

  stopAudio(){
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();

    this.audio.pause();
    this.audioEnable = false;
  }

  home() {
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();

    Swal.fire({
      text: "Are you sure, You want to go to home page?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      footer: "All players data will be lost"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('playerDetails');
        sessionStorage.removeItem("currentOrder");
        sessionStorage.removeItem("questionList");
        this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();
    
    Swal.fire({
      text: "Are you sure, You want to logout?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      footer: "All saved data will be lost!"
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        this.router.navigate(['']);
        this.audio.pause();
      }
    });
  }
}
