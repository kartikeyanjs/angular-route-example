import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SearchListComponent } from './main-components/search-list/search-list.component';
import { SearchPipe } from './main-components/search-list/search.pipe';
import { VerticalMenuModule } from './main-components/vertical-menu/vertical-menu.module';

@NgModule({
  declarations: [ AppComponent, SearchListComponent, SearchPipe],
  imports: [ 
    AppRoutingModule,
    VerticalMenuModule, 
    BrowserModule, FormsModule, HttpModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
