import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapContactsComponent } from './map-contacts.component';

describe('MapContactsComponent', () => {
  let component: MapContactsComponent;
  let fixture: ComponentFixture<MapContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
