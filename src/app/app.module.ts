import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { DataService } from './data.service';
import { CollectionCardsComponent } from './collection-cards/collection-cards.component';
import { CollectionCardDetailsComponent } from './collection-card-details/collection-card-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CollectionCardComponent,
    CollectionCardsComponent,
    CollectionCardDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
