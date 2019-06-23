import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @HostBinding('class.is-open') @Input() isOpen=false;

  constructor() { }

  ngOnInit() {
  }

}
