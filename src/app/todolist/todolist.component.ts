import { Component, OnInit } from '@angular/core';
// import { Task } from '../interface/task';
import { Task, TodoItem } from '../model/task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  title = 'ToDo ';
  model = new Task();
  todoText = '';

  constructor() { }

  ngOnInit(): void {
  }

  getName() {
    return this.model.user;
  }

  getTodoitems() {
    return this.model.items;
  }
  addItem(newTask: string) {
    if (newTask != '') {
      this.model.items.push(new TodoItem(newTask, false));
      this.todoText = '';
    } else {
      console.log('Please Enter ToDo');

    }
  }

  removeTask(index: number) {
    this.model.items.splice(index, 1)

  }
}
