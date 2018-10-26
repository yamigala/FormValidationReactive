import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { FormService } from './core/form.service';
import { BookedticketsModule } from './core/bookedtickets/bookedtickets.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CoreModule,HttpClientModule,HttpClientInMemoryWebApiModule,BookedticketsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
