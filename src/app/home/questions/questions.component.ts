import { Component } from '@angular/core';
import config from '../../shared/json/config.json'
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})

export class QuestionsComponent {

  questions: any[] = config.questions;
  currentOrder: any = Number(sessionStorage.getItem('currentOrder'));
  questionList: any = sessionStorage.getItem('questionList');

  constructor(private router: Router) {
    if (!this.currentOrder) {
      this.router.navigate(['/home']);
    }
    if (!this.questionList) {
      this.questionList = this.questions.sort(() => Math.random() - 0.5);
      this.questionList = this.questionList.filter((x: any, i: number) => x.order = i + 1);
      sessionStorage.setItem('questionList', JSON.stringify(this.questionList));
    } else {
      this.questionList = JSON.parse(this.questionList);
    }
  }

  ngAfterViewInit(): void {
    this.scroll('itemRef');
  }

  scroll(id: any) {
    let el: any = document.getElementById(id);
    setTimeout(() => {
      el.scrollIntoView();
    }, 200);
  }

  onQuestion(valid: boolean = false) {
    let audio = new Audio();
    audio.src = "./assets/mp3/click.wav";
    audio.play();

    if (!valid) return;
    else this.router.navigate(['/home/questions/options']);
  }
}