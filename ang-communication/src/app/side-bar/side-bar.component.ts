import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  messageString:string;

  @HostBinding('class.is-open') @Input() isOpen =false;

  // toggle(){
  //   this.isOpen=!this.isOpen;
  // }
  // message(msg){
  //   this.messageString=msg;
  // }


  constructor() { }

}
