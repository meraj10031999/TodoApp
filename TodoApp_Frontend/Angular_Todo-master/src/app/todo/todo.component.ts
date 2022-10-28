import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from './../service/data/todo-data.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id: any;  // initialize the id sent in the URL
  todo: Todo | any;  // initialize the todo object
  // Autowire the TodoDataService
  // Also, to route the parameter id from the URL to the todo component, we inject ActivatedRoute
  constructor(private todoDataService: TodoDataService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
    // Assigning a default value to avoid console todo undefined error.
    // This happens as the form loads before the async data is available to the browser
    // For a POST request data we do not need to retrieveTodo() with the id as parameter, since it's a new insert
    this.id = this.route.snapshot.params['id'];
    this.todo =  new Todo(this.id,'', false, new Date());  // for adding a new Todo, with parameter id = -1 passed

    // For put (Update) request only
    if (this.id != -1) {
        this.todoDataService.retrieveTodo('Pcs-Global', this.id)
          .subscribe(todoData => this.todo = todoData)
    }
  }
  saveTodo() {
    if (this.id == -1) {
      // create a new Todo
      this.todoDataService.createTodo('Pcs-Global', this.todo)
          .subscribe ( data => {
                          console.log(data);
                          this.router.navigate(['todos']);
                      }
          )
    } else {
        // Update a Todo
        this.todoDataService.updateTodo('Pcs-Global', this.id, this.todo)
              .subscribe ( data => {
                              console.log(data);
                              this.router.navigate(['todos']);
                          }
              )
      }
  }
}

