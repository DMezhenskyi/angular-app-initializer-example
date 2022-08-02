import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InitializerModule } from './initializer/initializer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InitializerModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
