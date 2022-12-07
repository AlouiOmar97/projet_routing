import { Component, OnInit } from '@angular/core';
import { todo } from './../model/Todo';
import { CalculService } from './../services/calcul.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todolist: todo[]
  completed: number
  uncompleted: number
  constructor(private calculService: CalculService) { }

  ngOnInit(): void {
    this.todolist = [
      { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false },
      { "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false },
      { "userId": 1, "id": 3, "title": "fugiat veniam minus", "completed": false },
      { "userId": 1, "id": 4, "title": "quo adipisci enim quam utab", "completed": true }];
  }

  getNbCompleted() {
    this.completed = this.calculService.getNumberOf(this.todolist, "completed", true)
  }
  getNbUncompleted() {
    this.uncompleted = this.calculService.getNumberOf(this.todolist, "completed", false)
  }
}
