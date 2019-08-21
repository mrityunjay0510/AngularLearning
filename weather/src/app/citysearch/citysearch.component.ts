import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FileReadService } from '../file-read.service';
import { City } from '../modal/city';
import { WeatherService } from '../serives/weather.service';
import { WeatherInfo, Weather} from '../modal/weatherInfo';

@Component({
  selector: 'app-citysearch',
  templateUrl: './citysearch.component.html',
  styleUrls: ['./citysearch.component.sass']
})
export class CitysearchComponent implements OnInit {
  cities:Array<City>;
  selectedCity:City;
  isCitySelected:boolean=false;

  @Output() weatherInfo = new EventEmitter<WeatherInfo>();

  constructor(private fileService:FileReadService, private weatherService:WeatherService)  { 
  }

  ngOnInit() {
    this.fileService.loadCity().subscribe((response) => {
      this.cities = response;
     });
  }

  onCityChange(event){
    this.getSelectedCityInfo(event.target.value);
  }

  getSelectedCityInfo(cityName:string){
    this.selectedCity = this.cities.find(city=>city.name === cityName);
    if(this.selectedCity){
      this.isCitySelected=true;
    }else{
      this.isCitySelected=false;
    } 
  }

  fetchWeatherInfo(){
     this.weatherService.getCityWeatherByCityId(this.selectedCity.id).subscribe((response)=> {
       this.weatherInfo.emit(response);   
      });  
  }
}
