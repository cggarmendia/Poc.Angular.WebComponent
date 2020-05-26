import { Injectable } from '@angular/core';
import { JourneyType } from '../../enums/journey.type';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { ContentTotalWithPrice } from './models/content-total-with-price';
import { CustomCurrencyPipe } from 'src/app/shared/pipes/custom-currency.pipe';

@Injectable()
export class ContentTotalService {
  constructor(private labelsProvider: LabelsProviderService, private currencyPrice: CustomCurrencyPipe) { }

  public getTextOfPriceHtml(priceType: JourneyType, price: number,
                            model: ContentTotalWithPrice): string {
    const args: Array<any> = [];
    let textToReplace: string;

    if (model.contentTotal.paxCount === 1) {
      textToReplace = 'popupTotalServicePricePRBZSingular';
      args.push(this.getTagWithThePrice(price, model));
    } else {
      textToReplace = 'popupTotalServicePricePRBZPlural';
      args.push(priceType === JourneyType.All
        && !model.contentTotal.isOneWay ? model.contentTotal.paxCount * 2 : model.contentTotal.paxCount);
      args.push(this.getTagWithThePrice(price, model));
    }

    return this.labelsProvider.translateAndTransform(textToReplace, args);
  }

  public getTextOfNoPriceHtml(model: ContentTotalWithPrice): string {
    const args: Array<any> = [];
    args.push(0);
    args.push(this.getTagWithThePrice(0, model));

    return this.labelsProvider.translateAndTransform('popupTotalServicePricePRBZPlural', args);
  }

  public getTagWithThePrice(price: number, model: ContentTotalWithPrice){
    return this.currencyPrice.transform(price, false, model.currencyCode, model.decimalSeparator,
      false, '1.2-2');
  }

  public isPossibleToShowTextOfOutboundPriceHtml(model: ContentTotalWithPrice): boolean {
    let isPossibleToShow = model.contentTotal.journeyCheckboxes.outboundCheckbox;
    if (isPossibleToShow) {
      isPossibleToShow = (model.contentTotal.isOneWay && !model.contentTotal.isOnlyInboundEnabled) ||
        (!model.contentTotal.isOneWay && !model.contentTotal.journeyCheckboxes.inboundCheckbox);
    }
    return isPossibleToShow;
  }

  public isPossibleToShowTextOfNoPriceHtml(model: ContentTotalWithPrice) {
    return this.isPossibleToShowTextOfNoPriceHtmlWhenIsNotOneWay(model)
      || (model.contentTotal.isOneWay &&
        this.isPossibleToShowTextOfNoPriceHtmlWhenIsOneWay(model));
  }

  private isPossibleToShowTextOfNoPriceHtmlWhenIsNotOneWay(model: ContentTotalWithPrice) {
    return (!model.contentTotal.journeyCheckboxes.outboundCheckbox
      && !model.contentTotal.journeyCheckboxes.inboundCheckbox);
  }

  private isPossibleToShowTextOfNoPriceHtmlWhenIsOneWay(model: ContentTotalWithPrice) {
    return (model.contentTotal.isOnlyInboundEnabled && !model.contentTotal.journeyCheckboxes.inboundCheckbox)
      || (!model.contentTotal.isOnlyInboundEnabled && !model.contentTotal.journeyCheckboxes.outboundCheckbox);
  }
}
