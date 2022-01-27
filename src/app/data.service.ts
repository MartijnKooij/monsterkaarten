import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { CollectionCard } from './models/collection-card.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  get collectionCards$(): Observable<CollectionCard[]> {
    return this.http.get<CollectionCard[]>('/assets/data/series.json');
  }

  getCardsInCollection(collectionId: string): Observable<CollectionCard[]> {
    return this.http.get<CollectionCard[]>(`/assets/data/${collectionId}/${collectionId}.json`);
  }
}
