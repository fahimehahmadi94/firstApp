import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { TodolistComponent } from './todolist/todolist.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'todo',
    component: TodolistComponent
  },
  {
    path: 'weather',
    component: WeatherComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
