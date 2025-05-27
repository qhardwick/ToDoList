import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../../models/itask';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  newTask?: ITask;
  name!: string;
  priority!: number;

  @Output() onNewTask: EventEmitter<ITask> = new EventEmitter<ITask>();

  addNewTask() {
    const task: ITask = {
      id: 0,
      name: this.name,
      completed: false,
      priority: this.priority,
      
    };

    this.onNewTask.emit(task);

    this.name = '';
    this.priority = 0;
  }
}
