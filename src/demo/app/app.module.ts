import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ngx-nav';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule, LibModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
