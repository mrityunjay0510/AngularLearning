import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Weather, WeatherInfo } from '../modal/weatherInfo';

@Component({
  selector: 'app-weatherinfo',
  templateUrl: './weatherinfo.component.html',
  styleUrls: ['./weatherinfo.component.sass']
})
export class WeatherinfoComponent implements OnInit ,OnChanges {

  @Input() weatherDetails:WeatherInfo;

  isDataLoaded:Boolean=false;
  weatherModal:Weather;
  time:string;
  sunRise:string;
  sunSet:string;

  constructor() {
   }

  ngOnChanges(){
    if(this.weatherDetails != undefined){
      this.weatherDetails.main.temp = this.weatherDetails.main.temp -273.15;
      this.weatherDetails.main.temp_max = this.weatherDetails.main.temp_max -273.15;
      this.weatherDetails.main.temp_min = this.weatherDetails.main.temp_min -273.15;
      this.sunRise  =   this.convertUnixTimeStampIntoIst(this.weatherDetails.sys.sunrise);
      this.sunSet = this.convertUnixTimeStampIntoIst(this.weatherDetails.sys.sunset);

      this.isDataLoaded=true;
    }else{
      this.isDataLoaded=false;
    }
    
  }

  convertUnixTimeStampIntoIst(unixtimestamp:number){
    var date = new Date(unixtimestamp*1000);
    var hours = date.getHours();
    // Minutes
    var minutes = "0" + date.getMinutes();
    // Seconds
    var seconds = "0" + date.getSeconds();

    return  hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

  }
  ngOnInit() {
    
  }

}
