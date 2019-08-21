import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Weather, WeatherInfo } from '../modal/weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getCityWeatherByCityId(cityId:number):Subject<WeatherInfo>{
    const dataSub = new Subject<WeatherInfo>();
    this.http.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=41f52787009050b88f505b4c5ac9d7a8`)
    .subscribe((weatherInfo:WeatherInfo)=>{
      dataSub.next(weatherInfo);
    });
    return dataSub;
  }
}
