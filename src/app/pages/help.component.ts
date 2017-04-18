import { Component } from '@angular/core';

@Component({
  selector: 'help',
  template: `
    <h1> Help </h1>
    <p> This app is simple to use, simply add your todo item, and click 'add' </p>
    <p> If you want to delete an item, click the circular 'x' button at the side of the todo item </p>
  `,
  styleUrls: ['../app.component.css']
})


export class HelpComponent {

}
