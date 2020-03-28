import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(
    public id :number,
    public description:string,
    public done:boolean,
    public targetDate:Date

  ){

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos=[ 
    new Todo(1,"Learn To Dance",false,new Date()),
    new Todo(2,"Expert to be in Angular",false,new Date()),
    new Todo(3,"India",false,new Date()),
    new Todo(4,"Dont come outsise",false,new Date())
]

  // todos=[{ id:1, description:'learn to dance'},
  // { id:2, description:'Become Expert in Angular'},
  // { id:3, description:'Come To India'},
  // { id:4, description:'Please Avoid Corona'}


  constructor(


  ) { }

  ngOnInit() {
  }

}
