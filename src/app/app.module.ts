// Import angular dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import main component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
