import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private subject = new Subject<any>();

  sendMessage(message:string){
    this.subject.next({text:message});
  }

  getMessage():Observable<any>{
   return this.subject.asObservable();
  }

  clearMessage(){
    this.subject.next();
  }
}
