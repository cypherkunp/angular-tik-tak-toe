import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  @Input() squares: string[];
  @Output() onSquareClick = new EventEmitter<{ squareId: number; value: string }>();
  xIsNext: boolean = true;

  onSquareClickHandler(squareId: number) {
    if (!this.squares[squareId]) {
      this.squares[squareId] = this.xIsNext ? 'O' : 'X';
      this.onSquareClick.emit({ squareId, value: this.squares[squareId] });
      this.xIsNext = !this.xIsNext;
    }
  }
}
