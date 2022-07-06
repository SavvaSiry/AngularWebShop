import { Component } from '@angular/core';
import {divTrigger, hoverTrigger} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [hoverTrigger]
})

export class AppComponent {

  title = 'Home';
  hoverMenState = 'start';
  hoverWomenState = 'start';

}
