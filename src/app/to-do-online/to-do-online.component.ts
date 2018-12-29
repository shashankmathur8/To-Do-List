import { Component, OnInit } from '@angular/core';
import {ToDoOnlineServiceService} from '../to-do-online/to-do-online-service.service';



@Component({
  selector: 'app-to-do-online',
  templateUrl: './to-do-online.component.html',
  styleUrls: ['./to-do-online.component.css'],
  providers:[ToDoOnlineServiceService]
})
export class ToDoOnlineComponent implements OnInit {
  listArray:any[];
  date:any;
  constructor(private todoservice:ToDoOnlineServiceService) { }
  
  ngOnInit() {
    this.todoservice.getListValue().subscribe(item =>{
      this.listArray = item.map(list=>{
        return {
              $key:list.key,
              ...list.payload.val()
        };
      });

    });
  }
  Add(){
    this.todoservice.addValue(this.todoservice.form.value,this.date.toString());
  }
  onSubmit(date:Date){
    console.log(date);
    if(this.todoservice.form.get('$key').value==null)
    {
      this.todoservice.addValues(this.todoservice.form.value);
    }else{
      this.todoservice.updateValues(this.todoservice.form.value)
    }
    this.todoservice.form.reset();
  }

  delete(todo){
    this.todoservice.deletetodo(todo.$key)
  }
  check($key:string,bool:boolean){
    this.todoservice.ChangeDoneStatus($key,!bool);
  }

  

}
