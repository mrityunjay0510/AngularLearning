import { Component, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  message : String;
  subscription : Subscription;
  constructor(private messageService : MessageService) {
    this.subscription =  this.messageService.getMessage().subscribe((message)=>{
                          this.message = message.text;
                        })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
