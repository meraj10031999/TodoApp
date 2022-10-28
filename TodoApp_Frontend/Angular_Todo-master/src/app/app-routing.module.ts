import { RouteGuardService } from './service/route-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService]}, // multiple route guard service can be activated, hence in an array
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService]},
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService]},
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService]},
  { path: '**', component: ErrorComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
