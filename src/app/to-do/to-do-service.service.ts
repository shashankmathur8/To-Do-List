import { Injectable } from '@angular/core';
import {Todo} from '../models/todo';

import { DatePipe } from '@angular/common';
import {TODODATA} from '../models/data/todoData';

import { FormControl, FormGroup ,Validators} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {
  DataArray:Todo[] =TODODATA;
  constructor() {  }
  index=-1
  form= new FormGroup({
    Todo: new FormControl('',Validators.required),
    Notes:new FormControl(''),
    Due:new FormControl(new Date()),
    Done:new FormControl(false)
  });

  addtodo(todo){
    this.DataArray.push(todo);
  }
  gettodo(){
    return this.DataArray
  }
  deletetodo(todo:Todo){
    this.DataArray.splice(this.DataArray.indexOf(todo),1);
  }
  edit(todo:Todo){
    const editedTodo = Object.assign({}, todo, { Due: this.applyLocale(todo.Due) });
    this.form.setValue(editedTodo);
    this.deletetodo(todo);
  }
  updatetodo(todo: Todo) {
    const index = this.DataArray.map(x => x.Due).indexOf(todo.Due);
    this.DataArray[index] = todo;
  }
  applyLocale(due) {
    return new DatePipe(navigator.language).transform(due, 'y-MM-dd');
  }
  
  findIndex(todo:string){
      this.index = this.DataArray.map(x => x.Todo).indexOf(todo);
      if(this.index!=-1){
        return true;
      }else{
        return false;
      }
      
  
  }
}
