import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { PriorityBoardingPopupC3Component } from './priority-boarding-popup-c3/priority-boarding-popup-c3.component';
import { FooterComponent } from './priority-boarding-popup-c3/footer/footer.component';
import { HeaderComponent } from './priority-boarding-popup-c3/header/header.component';
import { ContentComponent } from './priority-boarding-popup-c3/content/content.component';
import { ContentHeaderPriceComponent } from './priority-boarding-popup-c3/content/content-header/content-header-price/content-header-price.component';
import { ReplaceTextPipe } from './shared/pipes/replace-text.pipe';
import { ContentHeaderComponent } from './priority-boarding-popup-c3/content/content-header/content-header.component';
import { ContentTotalByJourneyComponent } from './priority-boarding-popup-c3/content/content-total-by-journey/content-total-by-journey.component';
import { ContentTotalWithPriceComponent } from './priority-boarding-popup-c3/content/content-total-with-price/content-total-with-price.component';
import { ContentJourneyCheckboxComponent } from './priority-boarding-popup-c3/content/content-journey-checkbox/content-journey-checkbox.component';
import { BaseComponent } from './shared/base/base.component';
import { CustomCurrencyPipe } from './shared/pipes/custom-currency.pipe';


@NgModule({
  declarations: [
    BaseComponent,
    ReplaceTextPipe,
    CustomCurrencyPipe,
    PriorityBoardingPopupC3Component,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    ContentHeaderPriceComponent,
    ContentHeaderComponent,
    ContentTotalByJourneyComponent,
    ContentTotalWithPriceComponent,
    ContentJourneyCheckboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ReplaceTextPipe,
    CustomCurrencyPipe
  ],
  entryComponents: [PriorityBoardingPopupC3Component]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {

    const strategyFactory = new ElementZoneStrategyFactory(PriorityBoardingPopupC3Component, this.injector);
    const entryCustomElement = createCustomElement(PriorityBoardingPopupC3Component,
      {
        injector: this.injector,
        strategyFactory
      });
    customElements.define('priority-boarding-popup-c3-markup', entryCustomElement);
  }

}
