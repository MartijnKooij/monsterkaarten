import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionCardDetailsComponent } from './collection-card-details/collection-card-details.component';
import { CollectionCardsComponent } from './collection-cards/collection-cards.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CollectionCardsComponent },
  { path: 'details', component: CollectionCardDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
