import { Component } from '@angular/core';
import Questions  from '../../shared/json/questions.json'
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [NgClass],
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})

export class QuestionsComponent {

  currentOrder: any = Number(sessionStorage.getItem('currentOrder'));
  questionList: any = sessionStorage.getItem('questionList');
  
  public questions: any[] = Questions;
  
  constructor(private router: Router){
    if(!this.currentOrder){
      this.router.navigate(['./home']);
    }
    if(!this.questionList){
      this.questionList = this.questions.sort(() => Math.random() - 0.5);
      this.questionList = this.questionList.filter((x: any, i: number) => x.order = i+1);
      sessionStorage.setItem('questionList', JSON.stringify(this.questionList));
    } else {
      this.questionList = JSON.parse(this.questionList);
    }
  }

  onQuestion(id: any) {

  }
}