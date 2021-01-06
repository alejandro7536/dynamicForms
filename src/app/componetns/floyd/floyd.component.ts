import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floyd',
  templateUrl: './floyd.component.html',
  styleUrls: ['./floyd.component.css']
})
export class FloydComponent implements OnInit {

  floydString: string = "";
  private static startOfAlphabet = 97;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(rows: number) {
    let currentLetter = FloydComponent.startOfAlphabet;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < i; j++) {
        this.floydString += String.fromCharCode(currentLetter) + "	";
        currentLetter++;
      }
      this.floydString += "\n\r";
    }
  }

}
