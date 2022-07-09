import { Component } from '@angular/core';
import {divTrigger, hoverTrigger, leftMenu} from "./app.animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [hoverTrigger, leftMenu]
})

export class AppComponent {

  title = 'Home';
  hoverMenState = 'start';
  hoverWomenState = 'start';
  leftMenuState = 'default';

}
