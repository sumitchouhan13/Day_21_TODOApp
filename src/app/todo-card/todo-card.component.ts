import { Component, OnInit, Input } from '@angular/core';
import { List } from '../model';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() cardItems: Array<List> = [];
  taskvalue = '';
  constructor() {}

  ngOnInit(): void {}
  addTask() {
    let taskobject = {
      title: this.taskvalue,
      done: true,
    };
    this.cardItems.push(taskobject);
    this.taskvalue = '';
  }
  completeTask(index: number) {
    if (this.cardItems[index].done) {
      this.cardItems[index].done = false;
    } else {
      this.cardItems[index].done = true;
    }
  }
  delete() {
    let deleteArr: number[] = [];
    this.cardItems.forEach((task, index) => {
      if (task.done == false) {
        deleteArr.push(index);
      }
    });
    for (var i = deleteArr.length - 1; i >= 0; i--) {
      this.cardItems.splice(deleteArr[i], 1);
    }
  }
}
