import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments: string[] = ['raja'];
  onSubmit(str: string) {
     console.log(str);
    this.comments.push(str);
  }
}
