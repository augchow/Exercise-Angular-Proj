import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EcommItemComponent } from './ecomm/ecomm-item/ecomm-item.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
