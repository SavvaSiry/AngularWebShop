import { Component } from '@angular/core';
import {hoverTrigger, leftMenu} from "./app.animations";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [hoverTrigger, leftMenu]
})

export class AppComponent {

  userName: string = "";

  constructor(private http: HttpClient) {
  }

  title = 'Home';
  hoverMenState = 'start';
  hoverWomenState = 'start';
  leftMenuState = 'default';

}
