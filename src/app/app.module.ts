import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { TodolistComponent } from './todolist/todolist.component';
import { LoginComponent } from './login/login.component';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { ApixuService } from './apixu.service';
import { CalculatorComponent } from './calculator/calculator.component';

export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    TodolistComponent,
    WeatherComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]), 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    })



  ],
  exports: [RouterModule],
  providers: [ApixuService],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
