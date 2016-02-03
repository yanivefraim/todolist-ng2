import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TodoNg2App} from '../app/todo-ng2';

beforeEachProviders(() => [TodoNg2App]);

describe('App: TodoNg2', () => {
  it('should have the `defaultMeaning` as 42', inject([TodoNg2App], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TodoNg2App], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

