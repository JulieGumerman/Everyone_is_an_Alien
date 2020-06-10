import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: 'reeeeet',
  // templateUrl: './app.component.html',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <h3>{{quote}}</h3>
      <pm-quotes></pm-quotes>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Everyone's an aliebn when ur an aliebn too:";
  quote: string = "The Wisdom of Jomny Sun";
}
