import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTotalWithPriceComponent } from './content-total-with-price.component';

describe('ContentTotalComponent', () => {
  let component: ContentTotalWithPriceComponent;
  let fixture: ComponentFixture<ContentTotalWithPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentTotalWithPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTotalWithPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
