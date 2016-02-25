import TodoInput from './todo-input';
import {TodoList} from './todo-list';
import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router'
import {TodoAppEdit} from "./todo-app-edit";
import {TodoAppView} from "./todo-app-view";

@Component({
  selector: 'todo-app',
  template: `
  <nav>
    <a href="#/edit">edit</a>
    <a href="#/view">view</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [TodoInput, TodoList, RouterOutlet]
})
@RouteConfig([
  {path: '/view', component: TodoAppView, useAsDefault: true },
  {path: '/edit', component: TodoAppEdit }
])
export class TodoApp {

}
