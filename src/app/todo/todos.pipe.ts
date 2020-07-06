import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem } from '../todo.model';

@Pipe({name: 'todos', pure:false})
export class TodosPipe implements PipeTransform {
  transform(todoItems: TodoItem[], isChecked: boolean): TodoItem[] {
    return todoItems.filter((item) => item.checked === isChecked);
  }

}
