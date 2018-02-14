
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';
import { ModalComponent } from './components/modal/modal.component';
import { Format } from './pipes/format-time.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    ModalComponent,
    Format
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
