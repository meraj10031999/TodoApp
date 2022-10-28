package com.pcsGlobal;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(value = "http://localhost:4200")
@RestController
public class TodoResource {
	@Autowired
	private TodoHardCodedService todoService;
	// Get all the Todo records of the User using the URL -> /users/{username}/todos
	@GetMapping("/users/{username}/todos")
	public List<Todo> getAllTodos(@PathVariable String username) {
		return todoService.findAll();
	}
	// Delete the Todo using the URL -> /users/{username}/todos/{id}
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		Todo todo = todoService.deleteById(id);
		if (todo != null) {
			return ResponseEntity.noContent().build();
		} 
		return ResponseEntity.notFound().build();
	}
	@GetMapping("/users/{username}/todos/{id}")
	public Todo getTodo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}
	// Update Todo using the URL -> /users/{username}/todos/{id}
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
		Todo todoUpdated = todoService.save(todo);
		return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
		// Note: ResponseEntity<Todo> means, that we wanted to return ResponseBody with Todo to be rendered in Angular
	}
	/*
	// Save/Create a Todo using the URL -> /users/{username}/todos
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) 
	{
		Todo todoCreated = todoService.save(todo);
		
		// Location of the created resource to determined
		// Get the current location of the created resource
		// Location URL is complete with the availablity of the {id} to be appended to /users/{username}/todos
		/// {id}
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(todoCreated.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	*/
	
	// Alternate method for SAVE/CREATE Todo
	@PostMapping("/users/{username}/todos")
	public Todo saveTodoAlt(@PathVariable String username, @RequestBody Todo todo) 
	{
		return todoService.save(todo);
	}




}

