
import {Component} from 'angular2/core';
import {bootstrap} from "angular2/platform/browser";

@Component({
  selector: 'todo-app',
  template: `{{message}}`
})

class TodoApp {
  message = 'hello world';
}

bootstrap(TodoApp);
