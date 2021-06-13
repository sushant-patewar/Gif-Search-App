import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { GifSearchService } from './services/gif-search.service';

@NgModule({
  declarations: [
    AppComponent,
    GifSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GifSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
