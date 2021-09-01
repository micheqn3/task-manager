// Import angular dependencies
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import main component
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
