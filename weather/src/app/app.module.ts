import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CitysearchComponent } from './citysearch/citysearch.component';
import { WeatherinfoComponent } from './weatherinfo/weatherinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    CitysearchComponent,
    WeatherinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
