import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHeaderPriceComponent } from './content-header-price.component';

describe('ContentHeadePriceComponent', () => {
  let component: ContentHeaderPriceComponent;
  let fixture: ComponentFixture<ContentHeaderPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHeaderPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHeaderPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
