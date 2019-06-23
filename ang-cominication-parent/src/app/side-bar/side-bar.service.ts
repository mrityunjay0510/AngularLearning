import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {
  isOpen=false;
  constructor() { }

  @Output() change:EventEmitter<boolean> =new EventEmitter();

  toggle(){
    this.isOpen=!this.isOpen;
    this.change.emit(this.isOpen);
  }
}
