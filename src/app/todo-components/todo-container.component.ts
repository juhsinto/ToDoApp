import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoElement } from './todo-element.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'todo-container',
  template: `
  <label for="usr">Todo Items:</label>

    <todo-element
      [firebaseTodoList]="items">
    </todo-element>


  <br>

  <label for="usr">Todo Item:</label>
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Enter your todo Item here" #newItem id="usr">
    <span class="input-group-btn">
      <button class="btn btn-default" (click)="addTodoItem(newItem)" type="button">Add</button>
    </span>
  </div>`
})

export class TodoContainer {

  //todoItems: TodoItem[];
  items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');

  }





  addTodoItem(todoItem: HTMLInputElement): boolean {
    if(todoItem.value == "") {
      return false;
    } else {
      console.log(`Adding todo element ${todoItem.value}`);

      this.items.push( todoItem.value );
      todoItem.value = '';

      return false;
    }
  }
}
