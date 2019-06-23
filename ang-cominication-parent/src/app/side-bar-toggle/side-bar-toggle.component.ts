import { Component, OnInit, Output,EventEmitter, HostListener } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent implements OnInit {

  @Output() toggle : EventEmitter<null> =new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  click(){
    this.toggle.emit();
  }


}
