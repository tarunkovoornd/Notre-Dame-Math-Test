import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  text: string;
  options: (number | string)[];
  correctAnswer: number | string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  allQuestions: Question[] = [
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
    },
    {
      text: 'What is the solution to the equation 4x - 5 = 7?',
      options: [1, 2, 3, 4],
      correctAnswer: 3
    },
    {
      text: 'What is the value of x in the equation 7x + 14 = 0?',
      options: [-2, -1, 0, 1],
      correctAnswer: -2
    },
    {
      text: 'Which of the following is a factor of x^2 - 4x + 4?',
      options: ['(x - 1)', '(x - 2)', '(x - 3)', '(x - 4)'],
      correctAnswer: '(x - 2)'
    },
    {
      text: 'If y = 4x - 1, what is the value of y when x = 3?',
      options: [11, 12, 13, 14],
      correctAnswer: 11
    },
    {
      text: 'What is the slope of the line x + 2y = 4?',
      options: [-2, '-1/2', '1/2', 2],
      correctAnswer: '-1/2'
    },
    {
      text: 'What is the value of x^2 - 4x + 4 when x = 3?',
      options: [1, 2, 3, 4],
      correctAnswer: 1
    },
    {
      text: 'Simplify x^2 - 9x + 14.',
      options: ['(x - 7)(x - 2)', '(x - 1)(x - 14)', '(x - 3)(x - 4)', '(x - 2)(x - 7)'],
      correctAnswer: '(x - 2)(x - 7)'
    },
    {
      text: 'What is the y-intercept of the line y = -3x + 7?',
      options: [-7, -3, 3, 7],
      correctAnswer: 7
    },
    {
      text: 'What is the solution to the inequality 5x - 2 < 13?',
      options: ['x < 3', 'x < 4', 'x > 3', 'x > 4'],
      correctAnswer: 'x < 3'
    },
    {
      text: 'What is the solution set of the equation |x + 2| = 3?',
      options: ['{-5, 1}', '{-1, 5}', '{1, 5}', '{-5, -1}'],
      correctAnswer: '{-5, 1}'
    },
    {
      text: 'What is the solution to the equation 3x + 5 = 2x + 8?',
      options: [1, 2, 3, 4],
      correctAnswer: 3
    },
    {
      text: 'What is the value of x in the equation 4x - 8 = 0?',
      options: [1, 2, 3, 4],
      correctAnswer: 2
    },
    {
      text: 'Which of the following is a factor of x^2 + 2x - 8?',
      options: ['(x + 1)', '(x + 2)', '(x + 3)', '(x + 4)'],
      correctAnswer: '(x + 4)'
    },
    {
      text: 'If y = 2x^2 - 3x + 1, what is the value of y when x = 2?',
      options: [1, 2, 3, 4],
      correctAnswer: 3
    },
    {
      text: 'What is the slope of the line 3x - 4y = 12?',
      options: [-3, '-3/4', '3/4', 4],
      correctAnswer: '3/4'
    },
    {
      text: 'What is the value of x^2 - 2x + 1 when x = 2?',
      options: [1, 2, 3, 4],
      correctAnswer: 1
    },
    {
      text: 'Simplify x^2 - 6x + 9.',
      options: ['(x - 3)(x - 3)', '(x - 1)(x - 9)', '(x - 2)(x - 7)', '(x - 3)(x - 6)'],
      correctAnswer: '(x - 3)(x - 3)'
    },
    {
      text: 'What is the y-intercept of the line y = 5x - 2?',
      options: [-5, -2, 2, 5],
      correctAnswer: -2
    },
    {
      text: 'What is the solution to the inequality 2x + 3 < 9?',
      options: ['x < 2', 'x < 3', 'x > 2', 'x > 3'],
      correctAnswer: 'x < 3'
    },
    {
      text: 'What is the solution set of the equation |x - 2| = 4?',
      options: ['{-6, 2}', '{-2, 6}', '{2, 6}', '{-6, 6}'],
      correctAnswer: '{-6, 6}'
    },
    {
      text: 'What is the solution to the equation 6x - 9 = 3x + 3?',
      options: [1, 2, 3, 4],
      correctAnswer: 4
    },
    {
      text: 'What is the value of x in the equation 3x + 15 = 0?',
      options: [-5, -3, 0, 5],
      correctAnswer: -5
    },
    {
      text: 'Which of the following is a factor of x^2 - 10x + 25?',
      options: ['(x - 3)', '(x - 4)', '(x - 5)', '(x - 6)'],
      correctAnswer: '(x - 5)'
    },
    {
      text: 'If y = x^2 - 4x + 4, what is the value of y when x = 1?',
      options: [0, 1, 2, 3],
      correctAnswer: 1
    },
    {
      text: 'What is the slope of the line x - 2y = 6?',
      options: [-2, '-1/2', '1/2', 2],
      correctAnswer: '1/2'
    },
    {
      text: 'What is the value of x^2 - 7x + 10 when x = 2?',
      options: [0, 1, 2, 3],
      correctAnswer: 0
    },
    {
      text: 'Simplify x^2 - 12x + 36.',
      options: ['(x - 6)(x - 6)', '(x - 3)(x - 12)', '(x - 4)(x - 9)', '(x - 6)(x - 12)'],
      correctAnswer: '(x - 6)(x - 6)'
    },
    {
      text: 'What is the y-intercept of the line y = 4x + 8?',
      options: [-8, -4, 4, 8],
      correctAnswer: 8
    },
    {
      text: 'What is the solution to the inequality x - 3 > -1?',
      options: ['x > 2', 'x > 3', 'x < 2', 'x < 3'],
      correctAnswer: 'x > 2'
    },
    {
      text: 'What is the solution set of the equation |x + 4| = 7?',
      options: ['{-3, 11}', '{3, 11}', '{-11, 3}', '{-11, -3}'],
      correctAnswer: '{-11, 3}'
    },
    {
      text: 'What is the solution to the equation 2x - 5 = 3x + 1?',
      options: [-1, 0, 1, 2],
      correctAnswer: -6
    },
    {
      text: 'What is the value of x in the equation 8x + 16 = 0?',
      options: [-2, -1, 0, 2],
      correctAnswer: -2
    },
    {
      text: 'Which of the following is a factor of x^2 - 8x + 16?',
      options: ['(x - 4)', '(x - 5)', '(x - 6)', '(x - 7)'],
      correctAnswer: '(x - 4)'
    },
    {
      text: 'If y = 2x^2 + 3x - 1, what is the value of y when x = 0?',
      options: [-1, 0, 1, 2],
      correctAnswer: -1
    },
    {
      text: 'What is the slope of the line 4x + 2y = 8?',
      options: [-2, '-1/2', '1/2', 2],
      correctAnswer: -2
    },
    {
      text: 'What is the value of x^2 + 2x + 1 when x = -1?',
      options: [0, 1, 2, 3],
      correctAnswer: 0
    },
    {
      text: 'Simplify x^2 - 4.',
      options: ['(x + 2)(x - 2)', '(x + 1)(x - 4)', '(x + 2)(x - 4)', '(x + 1)(x - 2)'],
      correctAnswer: '(x + 2)(x - 2)'
    },
    {
      text: 'What is the y-intercept of the line y = -3x + 4?',
      options: [-3, -2, 2, 4],
      correctAnswer: 4
    },
    {
      text: 'What is the solution to the inequality 2x + 3 > 7?',
      options: ['x > 2', 'x > 3', 'x < 2', 'x < 3'],
      correctAnswer: 'x > 2'
    },
    {
      text: 'What is the solution set of the equation |x - 4| = 6?',
      options: ['{-2, 10}', '{-10, 2}', '{-10, 10}', '{-4, 4}'],
      correctAnswer: '{-2, 10}'
    }
  ];  

  questions: Question[] = [];
  userAnswers: (number | string)[] = [];
  showResults = false;
  results: string[] = [];

  ngOnInit() {
    this.generateRandomQuestions();
  }

  generateRandomQuestions() {
    const shuffledQuestions = this.allQuestions.sort(() => 0.5 - Math.random());
    this.questions = shuffledQuestions.slice(0, 10);
    this.userAnswers = Array(this.questions.length).fill(null);
    this.showResults = false;
    this.results = [];
  }

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
