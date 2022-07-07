import {Component, OnInit} from '@angular/core';
import {arrowListAnimation, arrowRotation, radioButtons} from "../../app.animations";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [radioButtons, arrowRotation, arrowListAnimation]
})

export class TestComponent implements OnInit {

  sexState = 'close';
  colorState = 'close';
  sortState = 'close';

  constructor() {
  }

  ngOnInit(): void {
  }

}
