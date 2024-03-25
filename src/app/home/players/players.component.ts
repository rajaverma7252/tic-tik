import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './players.component.html',
  styleUrl: './players.component.scss'
})

export class PlayersComponent {
  playersCount: number = 0;
  playerDetails: any = [];
  validForm: boolean = false;

  constructor(private router: Router) { }

  onPlayerCount(event: number) {
    let audio = new Audio();
    audio.src = "../assets/mp3/click.wav";
    audio.play();

    for (var i = 1; i <= event; i++) {
      this.playerDetails.push({ id: i, name: "" });
    }
    this.playersCount = event;
  }

  onBack() {
    let audio = new Audio();
    audio.src = "../assets/mp3/click.wav";
    audio.play();

    this.playersCount = 0;
    this.playerDetails = [];
  }

  onNext() {
    let audio = new Audio();
    audio.src = "../assets/mp3/click.wav";
    audio.play();
    
    let found = this.playerDetails.find((x: any) => x.name.trim() == "");
    if (!found) {
      sessionStorage.setItem('playerDetails', JSON.stringify(this.playerDetails));
      sessionStorage.setItem("currentOrder", "1");
      Swal.fire({
        text: "Player(s) details added successfully",
        icon: "success",
        backdrop: false,
        showConfirmButton: false,
        footer: 'Redirecting to questions page...',
        timer: 1500,
      });
      setTimeout(() => {
        this.router.navigate(['/home/questions']);
      }, 1500);
    } else {
      Swal.fire({
        icon: "error",
        text: "Player(s) name can not be empty",
        confirmButtonText: 'Try again'
      });
    }
  }
}