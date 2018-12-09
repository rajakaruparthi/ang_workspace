import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  color = 'blue';

  changeColor(index: number) {
    return index % 2 === 0 ? 'white' : 'blue';
  }
}
