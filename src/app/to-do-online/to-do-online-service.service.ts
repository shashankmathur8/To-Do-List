import { Injectable } from '@angular/core';

import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import {FormControl,FormGroup, Validator, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ToDoOnlineServiceService {
  toDoList:AngularFireList<any>;
  constructor(private firebase:AngularFireDatabase) { }
  form= new FormGroup({
    $key:new FormControl(null),
    todo: new FormControl('',Validators.required),
    notes:new FormControl(''),
    due:new FormControl(new Date()),
    done:new FormControl(false)
  });

  getListValue(){
    this.toDoList=this.firebase.list('Todo');
    return this.toDoList.snapshotChanges();
  }
  addValue(todo,due:string){
    this.toDoList.push({
      Todo:todo.todo,
      Notes:todo.notes,
      Due:due,
      Done:todo.done
    });
  }
  addValues(todo){
    console.log(todo);
    this.toDoList.push({
      Todo:todo.todo,
      Notes:todo.notes,
      Due:todo.due,
      Done:todo.done
    });
  }

  ChangeDoneStatus($key:string,flag:boolean){
    this.toDoList.update($key,{Done:flag});
  }
  deletetodo($key:string){
    this.toDoList.remove($key);
  }
  edit(todo1){
    
    console.log(todo1)
    this.form.setValue({
      $key:todo1.$key,
    todo: todo1.Todo,
    notes:todo1.Notes,
    due:todo1.Due,
    done:todo1.Done
      
    });
  }
  updateValues(todo1){
    console.log(todo1)
    this.toDoList.update(todo1.$key,{
      Todo:todo1.todo,
      Notes:todo1.notes,
      Due:todo1.due,
      Done:todo1.done


    });
  }
}
