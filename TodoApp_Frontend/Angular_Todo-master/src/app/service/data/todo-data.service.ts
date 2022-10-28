import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient) { }

  retrieveAllTodos(username: string) {
    return this.http.get<Todo[]>(`http://localhost:7070/users/${username}/todos`);
  }
  deleteTodo(username: string, id: any) {
    return this.http.delete(`http://localhost:7070/users/${username}/todos/${id}`);
  }
    // Get/Retrieve a Todo
    retrieveTodo(username: any, id: any) {
      return this.http.get(`http://localhost:7070/users/${username}/todos/${id}`);
    }
    // Update a Todo
  updateTodo(username: any, id: any, todo: Todo) {
    return this.http.put(`http://localhost:7070/users/${username}/todos/${id}`, todo);
    // pass the body/content (todo) of the request as a second argument
  }
  // Create a new Todo
  createTodo(username: string, todo: Todo) {
    return this.http.post(`http://localhost:7070/users/${username}/todos`, todo);
    // pass the body/content (todo) of the request as a second argument
  }




  
}
