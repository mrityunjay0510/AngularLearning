import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ang-communication';

  sideBarIsOpened:boolean=false;

  ngOnInit(){
    this.sideBarIsOpened=true;
  }

  toggleSideBar(shouldOpen:boolean){
    this.sideBarIsOpened=!this.sideBarIsOpened;
  }
}
