import {Component, OnInit} from '@angular/core';
import {
  arrowListAnimation,
  arrowRotation,
  sexArrowListAnimation,
  svgOptionButton
} from "../../app.animations";
import {HttpClient} from "@angular/common/http";
import {Product} from "../moduls/product";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less'],
  animations: [sexArrowListAnimation, arrowRotation, arrowListAnimation, svgOptionButton]
})

export class TestComponent implements OnInit {

  sexState = 'close';
  colorState = 'close';
  sortState = 'close';
  testState = 'default';
  testState1 = 'default';
  testState2 = 'default';
  testState3 = 'default';
  testState4 = 'default';
  testState5 = 'default';
  testState6 = 'default';
  testState7 = 'default';
  testState8 = 'default';

  products?: [Product];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8081/products')
      .subscribe({
        next: (data: any) => {
          this.products = data;
          console.log(data);
        }
      })
  }


  templateForm(value: any) {

  }
}
