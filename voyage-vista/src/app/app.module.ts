import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChildSearchComponent } from './travels/children/child-search/child-search.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelsModule } from './travels/travels.module';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';

// import { OpinionComponent } from './opinion/opinion.component';



@NgModule({
  declarations: [
    AppComponent,
    
    // OpinionComponent,
    
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TravelsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    
    // OpinionComponent


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
