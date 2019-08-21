import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 // message : string;
 @ViewChild('message') message : ElementRef;
 
  constructor(private messageService:MessageService) { }

  //  sendInfo(message: HTMLInputElement){
  //   this.messageService.sendMessage(message.value);
  //  }

   sendInfo(){
    this.messageService.sendMessage(this.message.nativeElement.value);
   }

   clearInfo(){  
    this.messageService.clearMessage();
   }
}
