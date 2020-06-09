import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  selector: 'reeeeet',
  templateUrl: './app.component.html',
  // template: `
  //   <div>
  //     <h1>{{pageTitle}}</h1>
  //     <h3>{{quote}}</h3>
  //   </div>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "I is smart; I is kind; I is important";
  quote: string = "Just because you are small does not mean you are insignificant";
}
