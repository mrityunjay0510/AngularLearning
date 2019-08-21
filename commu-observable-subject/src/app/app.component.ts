import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  messages:any[]=[];
  subscription:Subscription;

  constructor(messageService:MessageService) {
    this.subscription = messageService.getMessage().subscribe((message)=>{
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
