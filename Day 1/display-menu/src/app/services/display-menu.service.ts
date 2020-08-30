import { Injectable } from '@angular/core';

@Injectable()
export class DisplayMenuService {
  public answers: string[] = [
    "Burger",
    "Fries",
    "Coke",
    "Pasta",
    "Garlic Bread",
    "Muffins",
    "Donuts",
    "Pizza",
    "Sausage"
  ];

  constructor((@Inject()){}


  getAnswers() {
    return this.answers;
  }

  getRandomAnswer() {
    return this.answers[this.getRandomInt(0, this.answers.length - 1)];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 
}
