import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import {Todo} from '../models/todo';
import {ToDoServiceService} from './to-do-service.service';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor(private todoservice:ToDoServiceService) { }
  flag:boolean=false
  
  
  todoList: Todo[]

  ngOnInit() {
    this.todoList=this.todoservice.gettodo();

  }
  gettodo(){
    this.todoList=this.todoservice.gettodo();
  }
  addtodo(todo:string){
    this.flag=this.todoservice.findIndex(todo);
    if(this.flag){
      this.todoservice.updatetodo(this.todoservice.form.value);
    }else{
      this.todoservice.addtodo(this.todoservice.form.value);
    }
  }

}
