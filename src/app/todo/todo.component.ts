import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todoItems = todos);
  }

  todoForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required])
  });

  onItemAdded(item: TodoItem) {
    this.todoItems.push(item);
  }

}
