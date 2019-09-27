import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/smart.component';
import { DumbComponent } from './dumb/dumb.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ counters: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
