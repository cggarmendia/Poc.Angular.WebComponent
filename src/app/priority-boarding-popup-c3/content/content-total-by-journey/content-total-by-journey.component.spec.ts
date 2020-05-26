import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTotalByJourneyComponent } from './content-total-by-journey.component';

describe('ContentTotalByJourneyComponent', () => {
  let component: ContentTotalByJourneyComponent;
  let fixture: ComponentFixture<ContentTotalByJourneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTotalByJourneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTotalByJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
