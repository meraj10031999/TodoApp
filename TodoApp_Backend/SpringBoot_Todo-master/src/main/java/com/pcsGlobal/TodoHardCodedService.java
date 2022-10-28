package com.pcsGlobal;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;
@Service
public class TodoHardCodedService {
	private static List<Todo> todos = new ArrayList<>();
	private static int idCounter = 0;
	
	static {
		todos.add(new Todo(++idCounter, "Pcs-Global", "Learn Advanced Java", new Date(), false));
		todos.add(new Todo(++idCounter, "Pcs-Global", "Learn Microservices", new Date(), false));
		todos.add(new Todo(++idCounter, "Pcs-Global", "Learn AngularJS", new Date(), false));
	}
	// Service to List all Todos
	public List<Todo> findAll() {
		return todos;
	}
	// Service to Delete by ID
	public Todo deleteById(long id) {
		Todo todo = findById(id);
		if (todo == null) return null;
		if (todos.remove(todo)) {  // to match (equals) the todo, we need to generate equals in Todo.java 
			return todo;
		}
		return null;
	}
	public Todo findById(long id) {
		for(Todo todo: todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}
	// Service to Save/Update Todo
	public Todo save(Todo todo) {
		// This a creation of new record (Save)
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter);
			todos.add(todo);
		} else {  // this is Update of the record, delete the old, save the new/updated record
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;  // return the Save/Updated Todo
	}

}
