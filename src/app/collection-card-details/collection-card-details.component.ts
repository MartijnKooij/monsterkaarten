import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, filter, map, Observable, switchMap, withLatestFrom } from 'rxjs';
import { DataService } from '../data.service';
import { CollectionCard } from '../models/collection-card.model';

@Component({
  selector: 'app-collection-card-details',
  templateUrl: './collection-card-details.component.html',
  styleUrls: ['./collection-card-details.component.css'],
})
export class CollectionCardDetailsComponent implements OnInit {
  collectionCards$: Observable<CollectionCard[]> = new Observable<CollectionCard[]>();
  collectionName$: Observable<string> = new Observable<string>();

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.collectionCards$ = this.route.queryParams.pipe(
      map((params) => params['id']),
      switchMap((collectionId: string) => this.dataService.getCardsInCollection(collectionId))
    );

    this.collectionName$ = combineLatest([
      this.route.queryParams,
      this.dataService.collectionCards$]).pipe(
        map(([params, cards]) => {
          const collectionId = params['id'];

          return cards.find(c => c.id === collectionId) ?? new CollectionCard();
        }),
        map(c => c?.title)
      );
  }
}
