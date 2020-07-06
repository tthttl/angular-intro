import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { TodoItem } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoItems: TodoItem[] = [];

  constructor(private httpClient:HttpClient,
              private snackBar: MatSnackBar) { }

  getTodos():Observable<TodoItem[]>{
    if(this.todoItems.length <= 0){
      return this.httpClient.get<TodoItem[]>('assets/todoStore.json').pipe(
        tap((todos) => {
          console.log('todos received');
          this.todoItems = todos;
        }),
        catchError((error) => {
          this.snackBar.open('Could not load todos', 'OK');
          return [];
        })
      );
    }
    return of(this.todoItems);
  }

  addTodo(item: TodoItem){
    this.todoItems.push(item);
  }
}
