import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { SideBarService } from './side-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(@Inject(SideBarService) private sideBarService:SideBarService) { }

  @HostBinding('class.is-open') isOpen=false;

  ngOnInit() {
    this.sideBarService.change.subscribe(isOpen=>{
      this.isOpen=isOpen;
    })
  }

  

}
