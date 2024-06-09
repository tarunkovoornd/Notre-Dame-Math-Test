import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  questions = [
    {
      text: 'What is the solution to the equation 2x + 3 = 7?',
      options: [1, 2, 3, 4],
      correctAnswer: 2
    },
    {
      text: 'What is the value of x in the equation 5x - 15 = 0?',
      options: [2, 3, 4, 5],
      correctAnswer: 3
    },
    {
      text: 'Which of the following is a factor of x^2 - 5x + 6?',
      options: ['(x - 1)', '(x - 2)', '(x - 3)', '(x - 4)'],
      correctAnswer: '(x - 2)'
    },
    {
      text: 'If y = 3x + 2, what is the value of y when x = 4?',
      options: [10, 11, 12, 14],
      correctAnswer: 14
    },
    {
      text: 'What is the slope of the line 2x - 3y = 6?',
      options: [-2, '2/3', '-2/3', '3/2'],
      correctAnswer: '-2/3'
    },
    {
      text: 'What is the value of 3x^2 - 12 when x = 2?',
      options: [0, 4, 8, 12],
      correctAnswer: 0
    },
    {
      text: 'Simplify 4x^2 - 8x + 4.',
      options: ['4(x^2 - 2x + 1)', '(4(x - 1)^2)', '4x(x - 2)', '4(x - 1)(x - 1)'],
      correctAnswer: '4(x - 1)(x - 1)'
    },
    {
      text: 'What is the y-intercept of the line y = 2x - 5?',
      options: [-5, -2, 0, 2],
      correctAnswer: -5
    },
    {
      text: 'What is the solution to the inequality 3x + 4 > 10?',
      options: ['x > 2', 'x > 3', 'x < 2', 'x < 3'],
      correctAnswer: 'x > 2'
    },
    {
      text: 'What is the solution set of the equation |x - 3| = 5?',
      options: ['{-2, 8}', '{2, 8}', '{2, -8}', '{-2, -8}'],
      correctAnswer: '{-2, 8}'
    }
  ];

  userAnswers: (number | string)[] = Array(this.questions.length).fill(null);
  showResults = false;
  results: string[] = [];

  selectAnswer(index: number, answer: number | string) {
    this.userAnswers[index] = answer;
  }

  checkAnswers() {
    this.results = this.questions.map((question, index) => {
      const isCorrect = this.userAnswers[index] === question.correctAnswer;
      return `Question ${index + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`;
    });
    this.showResults = true;
  }
}
