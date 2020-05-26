import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityBoardingPopupC3Component } from './priority-boarding-popup-c3.component';

describe('PriorityBoardingPopupC3Component', () => {
  let component: PriorityBoardingPopupC3Component;
  let fixture: ComponentFixture<PriorityBoardingPopupC3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriorityBoardingPopupC3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityBoardingPopupC3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
