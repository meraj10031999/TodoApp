import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
export class Todo {
  constructor(
        public id: number,
        public description: string,
        public done: boolean,
        public targetDate: Date
  ) { }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  // we want to have a list of todos
  todos: Todo[] | any;
  message:any;
        // = [ // here we are moving out from unstructured format to a structured one using class constructor
        //     new Todo(1, 'Learn to Dance', false, new Date()),
        //     new Todo(2, 'Become an expert at Angular', false, new Date()),
        //     new Todo(3, 'Visit India', true, new Date())
        //     // {id: 1, description: 'Learn to Dance'},
        //     // {id: 2, description: 'Become an expert at Angular'},
        //     // {id: 3, description: 'Visit India'}
        //   ]
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // }
  constructor( private todoService:TodoDataService ,
                private router: Router) { }
  ngOnInit(): void {
    this.refreshTodos();
   }
   refreshTodos() {
     // Here we fetch the data from the HttpClient REST API
     this.todoService.retrieveAllTodos('Pcs-Global').subscribe(
       todoData => {
         console.log(todoData);
         this.todos = todoData;
       });
   }
   deleteTodo(id: any) {
     console.log(`Delete Todo. ${id}`);
     this.todoService.deleteTodo('Pcs-Global', id).subscribe(
       response => {
         console.log(response);
         this.message = `Delete of ${id} successful!!`;
         // Since after delete message display the record deleted is still displayed
         // we need to call the refresh function once again, if the performance is not hit
         this.refreshTodos();
       })
     }
     updateTodo(id: any) {
      console.log(`Update: ${id}`);
      this.router.navigate(['todos', id]);  // route to the correct URL
    }
    addTodo() {
      this.router.navigate(['todos', -1]);      // -1 for a new insert
    }
  
  
  
 
 
}
