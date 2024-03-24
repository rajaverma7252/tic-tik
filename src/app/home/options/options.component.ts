import { NgClass } from '@angular/common';
import config from '../../shared/json/config.json'
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [NgClass],
  templateUrl: './options.component.html',
  styleUrl: './options.component.scss'
})

export class OptionsComponent {

  questions = config.questions;
  playerDetails: any = sessionStorage.getItem('playerDetails');
  currentOrder: any = Number(sessionStorage.getItem('currentOrder'));
  questionList: any = sessionStorage.getItem('questionList');

  currentQuestion: any;
  optionCount: number = 0;
  playerPosition: number = 0;
  playerName: string = "";
  disabledList: any[] = [];

  constructor(private router: Router) {
    if (!this.playerDetails || !this.currentOrder || !this.questionList) {
      this.router.navigate(['/home']);
    } else {
      this.playerDetails = JSON.parse(this.playerDetails);
      this.questionList = JSON.parse(this.questionList);
      this.currentQuestion = this.questionList.find((x: any) => x.order == this.currentOrder);
      this.optionCount = this.playerDetails.length * 10;
      this.playerPosition = 1;
      this.playerName = this.playerDetails[this.playerPosition - 1].name;
    }
  }

  onOption(option: number) {
    Swal.fire({
      title: "Naali me",
      imageUrl: "https://pluspng.com/img-png/user-png-icon-account-avatar-human-male-man-men-people-person-download-svg-download-png-edit-icon-512.png",
      imageWidth: 200,
      imageHeight: 200,
      backdrop: false,
      confirmButtonText: "Ok",
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.playerPosition == this.playerDetails.length && this.currentOrder != config.totalQuestion) {
          sessionStorage.setItem("currentOrder", this.currentOrder + 1);
          this.router.navigate(['/home/questions']);
        } else if (this.playerPosition == this.playerDetails.length && this.currentOrder == config.totalQuestion) {
          Swal.fire({
            title: "Thank You for playing!",
            text: "Please feel free to share your thoughts, experiences or any suggestions for further improvement via email at rajaverma7252@gmail.com. Your input is highly valued and appreciated.",
            icon: "success",
            backdrop: false
          }).then((ok) => {
            if (ok.isConfirmed) {
              sessionStorage.removeItem('playerDetails');
              sessionStorage.removeItem("currentOrder");
              sessionStorage.removeItem("questionList");
              this.router.navigate(['/home']);
            }
          })
        }
        else {
          this.disabledList.push(option);
          this.playerPosition += 1;
          this.playerName = this.playerDetails[this.playerPosition - 1].name;
        }
      }
    });
  }

  isDisabled(option: number) {
    if (this.disabledList.includes(option)) return true;
    else return false;
  }
}
