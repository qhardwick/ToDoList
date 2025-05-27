import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ITask } from '../../models/itask';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from "../add-task/add-task.component";

@Component({
  selector: 'app-list',
  imports: [CommonModule, FormsModule, AddTaskComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  todoList: ITask[] = [];

  sortBy!: string;

  id: number = 1;

  addTaskToList(task: ITask) {
    task.id = this.id;
    this.id++;
    this.todoList.push(task);
  }

  toggleComplete(task: ITask) {
    task.completed = !task.completed;
    this.sort(this.sortBy);
  }

  removeTask(id: number) {
    this.todoList = this.todoList.filter(task => task.id != id)
  }

  sort(condition: string) {
    if(condition === 'priority') {
      this.todoList.sort((a,b) => a.priority - b.priority).reverse();
    } 

    else if(condition === 'alphabetical') {
      this.todoList.sort((a, b) => a.name.localeCompare(b.name));
    }

    else if(condition === 'completed') {
      let completed = this.todoList.filter(task => task.completed);
      let inProgress = this.todoList.filter(task => !task.completed);
      this.todoList = [...completed, ...inProgress];
    }

    else {
      this.todoList.sort((a,b) => a.id - b.id);
    }
  }
}
