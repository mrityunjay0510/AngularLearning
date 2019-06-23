import { Component, HostListener, Output ,EventEmitter } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent {

  @Output() toggle : EventEmitter<null> = new EventEmitter();

  @HostListener('click') 
  click(){
    //this.sideBar.toggle();
    //this.sideBar.message("I am data come from Side-bar-toggle");
    this.toggle.emit();
  }

  constructor() { }
}
