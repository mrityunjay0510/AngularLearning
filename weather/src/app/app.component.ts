import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'weather';
  weatherData:string;

  sendEventDataToWeatherInfo(event){
    this.weatherData=event;
  }
}
