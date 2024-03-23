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
    for (var i = 1; i <= event; i++) {
      this.playerDetails.push({ id: i, name: "" });
    }
    this.playersCount = event;
  }

  onBack() {
    this.playersCount = 0;
    this.playerDetails = [];
  }

  onNext() {
    let found = this.playerDetails.find((x: any) => x.name.trim() == "");
    if (!found) {
      sessionStorage.setItem('playerDetails', JSON.stringify(this.playerDetails));
      Swal.fire({
        // title: "Good job!",
        text: "Player(s) details added successfully",
        icon: "success",
        backdrop: false,
        showConfirmButton: false,
        footer: 'Redirecting to questions page...',
        timer: 2000,
      });
      setTimeout(() => {
        this.router.navigate(['/home/questions']);
      }, 2000);
    } else {
      Swal.fire({
        icon: "error",
        // title: "Oops...",
        text: "Player(s) name can not be empty",
        confirmButtonText: 'Try again'
      });
    }
  }
}