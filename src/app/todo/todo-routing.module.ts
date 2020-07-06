import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo.component';

const todoRoutes: Routes = [
  {path: '', component: TodoComponent},
  {path: 'form', component: TodoFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(todoRoutes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
