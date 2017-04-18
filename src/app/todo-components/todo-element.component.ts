import { Input, Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'todo-element',
  templateUrl: 'todo-container.component.html'
})

export class TodoElement {

  @Input() firebaseTodoList: FirebaseListObservable<any[]>;
  @Input() todoList: TodoItem[];

  delete(key: string): boolean {
    // get index to be deleted at
    console.log(`The index to be deleted is ` + key);

    // check if we have scope
    //console.log(this.firebaseTodoList);

    // delete database element with key
    this.firebaseTodoList.remove(key);

    return false;
  }

}
