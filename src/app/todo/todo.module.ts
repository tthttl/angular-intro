import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodosPipe } from './todos.pipe';

@NgModule({
  imports: [
    TodoRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule
  ]
})
export class TodoModule {

}
