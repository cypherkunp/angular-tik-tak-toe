import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() value: string;
  @Input() squareId: number;
  @Output() onSquareClick = new EventEmitter<number>();

  squareClickHandler() {
    this.onSquareClick.emit(this.squareId);
  }
}
