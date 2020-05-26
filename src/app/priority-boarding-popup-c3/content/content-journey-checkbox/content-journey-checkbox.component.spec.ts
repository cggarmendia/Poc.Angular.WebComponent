import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentJourneyCheckboxComponent } from './content-journey-checkbox.component';

describe('ContentJourneyCheckboxComponent', () => {
  let component: ContentJourneyCheckboxComponent;
  let fixture: ComponentFixture<ContentJourneyCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentJourneyCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentJourneyCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
