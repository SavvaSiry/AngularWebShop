import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {arrowRotation, radioButtons} from "../../app.animations";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  animations: [radioButtons, arrowRotation]})

export class TestComponent implements OnInit {

  clickedDivState = 'start';
  sexState ='default';
  sexRadioButtonState = 'close';
  colorState = 'default';
  colorRadioButtonState = 'close';



  constructor() { }

  ngOnInit(): void {
  }

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 2000);
  }

  rotateSex() {
    this.sexState = (this.sexState === 'default' ? 'rotated' : 'default');
  }

  rotateColor() {
    this.colorState = (this.colorState === 'default' ? 'rotated' : 'default');
  }
}
