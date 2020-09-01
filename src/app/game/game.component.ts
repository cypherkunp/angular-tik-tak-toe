import { WinnerCalculator } from './winner-calculator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [WinnerCalculator],
})
export class GameComponent {
  squares: string[] = Array(9).fill(null);
  winner: string;

  constructor(private winnerCalculator: WinnerCalculator) {}

  onSquareClickHandler(event) {
    this.squares[event.squareId] = event.value;
    this.winner = this.winnerCalculator.check(this.squares);
  }
}
