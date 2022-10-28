import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome back!!! ';
  name = "";
  // create a member variable for fetched data from service
  welcomeMessageFromService: string = "";
  // ActivatedRoute as the Angular dependency injection framework as constructor parameter will accept
  // the parameter passed by app.routing.module.ts to the WelcomeComponent
  constructor(private route:ActivatedRoute,
              private service:WelcomeDataService) { }  // injecting the service for REST API welcome message bean
  ngOnInit(): void {
      //console.log("Cannot keep the Angular Lifecycle method, empty");
      // console.log(this.message);
      // console.log(this.route.snapshot.params['name']); // pick up the 'name' parameter from the route
      this.name = this.route.snapshot.params['name'];
    }
  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    // Need to subscribe for the observable to work asynchronously otherwise it hangs.
    // After we get the response we need to extract the data from the response body
    // by passing a function to handle the observable in the subscribe() as Lambda function
    this.service.executeHelloWorldBeanService().subscribe(
            data => this.handleSuccessfulResponse(data.message)
        );
    // console.log("Last activity of getWelcomeMessage() to check asynchronous process");
  }
  handleSuccessfulResponse(responseMessage: any) {
    // console.log(responseMessage);
    this.welcomeMessageFromService = responseMessage;
  }
}
