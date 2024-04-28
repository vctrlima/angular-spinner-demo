import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DataSharingModule } from './shared/data-sharing/data-sharing.module';

@NgModule({
  declarations: [AppComponent, SpinnerComponent],
  imports: [BrowserModule, DataSharingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
