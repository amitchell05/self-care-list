import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskBeingEdited: string = '';
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
    if (!this.taskList.includes(this.taskName) && this.taskName !== 'Enter an activity...') {
      this.taskList.push(this.taskName);
    }
  }

  removeTaskItem(task: string) {
    let index = this.taskList.indexOf(task);
    this.taskList.splice(index, 1); 
  }

  editTaskItem(task: string) {
    this.taskBeingEdited = task;
  }

  saveTaskItem(newItem: string, oldItem: string) {
    let index = this.taskList.indexOf(oldItem);
    if (newItem !== '') {
      this.taskList.splice(index, 1, newItem);
    }
    this.taskBeingEdited = '';
  }

}
