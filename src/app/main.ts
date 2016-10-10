import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import {CanvasDrawer} from "./CanvasDrawer";

@Component({
  selector: 'mainComponent',
  template: require('./main.html')
})
export class MainComponent implements OnInit {

  public cellStates: any[][] = [];

  @ViewChild('board') board: ElementRef;

  init() {
    for(let i = 0; i < CanvasDrawer.COLUMNS; i++) {
      const rows = [];
      this.cellStates.push(rows);

      for(let j = 0; j < CanvasDrawer.ROWS; j++) {
        rows.push(0);
        CanvasDrawer.drawCell(this.board.nativeElement, i, j, this.getRandomInt(0, 2));
      }
    }
  }


  ngOnInit(): void {
    this.init();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
