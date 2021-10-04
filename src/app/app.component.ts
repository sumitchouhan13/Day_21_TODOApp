import { Component } from '@angular/core';
import { List } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TaskApp';

  cardItems: Array<List> = [];
  addDatatoList(item: List) {
    this.cardItems.push(item);
  }
}