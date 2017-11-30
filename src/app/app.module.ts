import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ZSearchComponent } from './z-search/z-search.component';
import { ZomatoService } from './zomato.service';
@NgModule({
  declarations: [
    AppComponent,
    ZSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ZomatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
