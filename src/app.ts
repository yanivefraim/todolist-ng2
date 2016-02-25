
import { bootstrap } from 'angular2/platform/browser';
import { TodoApp } from './app/todo-app';
import { TodoService } from './app/todo-service';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { provide } from 'angular2/core';

bootstrap(TodoApp, [TodoService, ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
