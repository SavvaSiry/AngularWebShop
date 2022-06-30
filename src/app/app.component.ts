import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('test', [
      state('noActive', style({ background: 0 })),
      state('active', style({ background: '#eeeeee' })),
      transition('noActive <=> active', animate('0.3s')),
    ])
  ]
})

export class AppComponent {
  title = 'Home';

  isExpanded: boolean = false
  state: string = 'initial'

  expand() {
    this.isExpanded = !this.isExpanded
    this.state = this.isExpanded ? 'expanded' : 'initial'
  }
}
