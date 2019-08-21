import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { City } from './modal/city';

@Injectable({
  providedIn: 'root'
})
export class FileReadService {

  constructor(private http:HttpClient) { }

  loadCity():Subject<Array<City>>{
    const cities= new Subject<Array<City>>();
    this.http.get("../assets/IndianCity.json")
    .subscribe((data:Array<City>)=>{
      cities.next(data);
    });
   return cities;
  }
}
