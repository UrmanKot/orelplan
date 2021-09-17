import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingNewsComponent } from './viewing-news.component';

describe('ViewingNewsComponent', () => {
  let component: ViewingNewsComponent;
  let fixture: ComponentFixture<ViewingNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewingNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
