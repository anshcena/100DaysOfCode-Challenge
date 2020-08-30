import { Component } from '@angular/core';
import { DisplayMenuService } from "../services/DisplayMenuService.service";
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
@Injectable()
export class HomePage {
  public answer: string = "...";
  constructor(public service: DisplayMenuService) {}

  showAnswer() {
    this.answer = this.magicBall.getRandomAnswer();
  }

}
