import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   /**
    *
    */
   constructor() {
   }
   getDataFromServer(){
      return 'Data from server';
    }
}
