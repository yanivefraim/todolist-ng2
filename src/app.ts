
import { provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { TodoApp } from './app/todo-app';
import { TodoService } from './app/todo-service';

bootstrap(TodoApp, [TodoService, provide('theAnswer', {useValue: 42})]);
