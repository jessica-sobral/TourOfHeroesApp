// ng new angular-tour-of-heroes
// cd angular-tour-of-heroes
// ng serve --open

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tour of Heroes";
}
