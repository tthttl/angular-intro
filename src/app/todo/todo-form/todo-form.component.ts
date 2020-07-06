import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { TodoItem } from '../../todo.model';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Input() nextId: number;
  @Output() itemAdded = new EventEmitter<TodoItem>();

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  todoForm: FormGroup = new FormGroup({
    description: new FormControl('', [Validators.required])
  });


  onSubmit(form: FormGroupDirective) {
    if (this.todoForm.valid && this.todoForm.dirty) {
      this.todoService.addTodo({
        id: this.nextId,
        description: this.todoForm.value.description,
        checked: false
      });
      form.resetForm();
      this.todoForm.reset();
      this.todoForm.markAsUntouched();
    }
  }

}
