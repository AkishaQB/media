import { Component } from '@angular/core';
import getContests from './lib/date-converter/types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'media';
  constructor() {
    const currentDate = getContests;
    console.log('datesss', currentDate)
  }
}
