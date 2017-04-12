import { Input, Component } from '@angular/core';
import { TodoItem } from './todo-item';

@Component({
  selector: 'todo-element',
  templateUrl: 'todo-container.component.html'
})

export class TodoElement {

  @Input() todoList: TodoItem[];

  delete(list: TodoItem[], n: number): boolean {
    // get index to be deleted at
    // console.log(`The index to be deleted is ` + n);

    // check if we have scope
    // console.log(list.length);

    // delete at position n, by one element
    list.splice(n, 1);

    return false;
  }

}
