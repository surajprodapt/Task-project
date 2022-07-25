import { Component, OnInit } from '@angular/core';

import { TaskService } from '../services/task.service';
import { Task } from '../task';
@Component({
  selector: 'app-taskss',
  templateUrl: './taskss.component.html',
  styleUrls: ['./taskss.component.css']
})
export class TaskssComponent implements OnInit {
  tasks:Task[] = [];

  constructor(private tasksServices:TaskService) { }

  ngOnInit(): void {
  this.tasksServices.getTasks().subscribe((tasks)=>(this.tasks=tasks))
  }
  deleteTask(task:Task){
    this.tasksServices
    .deleteTask(task)
    .subscribe(()=>(
      this.tasks=this.tasks.filter(t=>t.id !==task.id)
    ));

  }
  onToggleReminder(task:Task){
    task.reminder = !task.reminder;
    // console.log(task.reminder)
    this.tasksServices
    .updateTaskReminder(task)
    .subscribe()
  }
  addTask(task:Task){
    // console.log(task);
    this.tasksServices
        .addTask(task)
        .subscribe((task)=>(this.tasks.push(task)))

  }

}
