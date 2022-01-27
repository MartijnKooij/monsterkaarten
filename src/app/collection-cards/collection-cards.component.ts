import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-collection-cards',
  templateUrl: './collection-cards.component.html',
  styleUrls: ['./collection-cards.component.css'],
})
export class CollectionCardsComponent {
  collectionCards$ = this.dataService.collectionCards$;

  constructor(private dataService: DataService) {}
}
