import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
  constructor(private http: HttpClient) { }

  getWeather(location: string) {
    return this.http.get(
      'https://api.apixu.com/v1/current.json?key=fac9cc6cfde23f89ad47f111ed987bd6Y&q=' + location


      //       `http://api.weatherstack.com/current?access_key =fac9cc6cfde23f89ad47f111ed987bd6
      // & query = ${location}`
    );
  }
}