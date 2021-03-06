import { Component, Input, OnInit } from '@angular/core';
import { CollectionCard } from '../models/collection-card.model';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
  styleUrls: ['./collection-card.component.css']
})
export class CollectionCardComponent implements OnInit {
  @Input() card!: CollectionCard;

  constructor() { }

  ngOnInit(): void {
  }

}
