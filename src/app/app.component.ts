import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, QuestionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notre-dame-math-test';
  showQuestions = false;

  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;

  onPracticeNowClick() {
    this.showQuestions = true;
    this.questionComponent.generateRandomQuestions();
  }
}
