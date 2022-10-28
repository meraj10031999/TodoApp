import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// We create a class to give a structure to the object fetched from the response body
export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  // inject HttpClient module
  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    // mention the response structure in the get method as a generics
    return this.http.get<HelloWorldBean>('http://localhost:7070/hello-world-bean');
    // console.log("Execute Hello World Bean Service");
  }
}
