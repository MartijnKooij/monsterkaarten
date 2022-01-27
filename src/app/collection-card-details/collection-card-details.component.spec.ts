import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCardDetailsComponent } from './collection-card-details.component';

describe('CollectionCardDetailsComponent', () => {
  let component: CollectionCardDetailsComponent;
  let fixture: ComponentFixture<CollectionCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
