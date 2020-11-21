import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskName: string = 'Enter an activity...';
  taskList: string[] = [
    'Take a bath',
    'Exercise for 30 minutes',
    'Watch a movie'
  ];

  constructor() { }

  ngOnInit() {
  }

  addTaskItem() {
    if (!this.taskList.includes(this.taskName)) {
      this.taskList.push(this.taskName);
    }
  }

  // removeTaskItem() {

  // }

  // editTaskItem() {

  // }

}
