import { Component, OnInit, HostListener } from '@angular/core';
import { SideBarService } from '../side-bar/side-bar.service';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent implements OnInit {

  constructor(private sideBarService:SideBarService) { }

  ngOnInit() {
  }

  @HostListener('click')
  click(){
    this.sideBarService.toggle();
  }

}
