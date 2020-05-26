import { JourneyCheckboxes } from './journey-checkboxes';
import { ContentTotalWithPrice } from '../content-total-with-price/models/content-total-with-price';
import { ContentTotal } from './content-total';
import { ContentJourneyCheckbox } from '../content-journey-checkbox/models/content-journey-checkbox';
import { ContentHeader } from '../content-header/models/content-header';
import { JourneyType } from '../../enums/journey.type';

export class Content {
  public isPossibleToShowOutboundCheckbox: boolean;
  public isPossibleToShowInboundCheckbox: boolean;
  public contentTotalWithPrice: ContentTotalWithPrice;
  public contentTotalByJourney: ContentTotal;
  public contentHeader: ContentHeader;
  public outboundContentJourneyCheckbox: ContentJourneyCheckbox;
  public inboundContentJourneyCheckbox: ContentJourneyCheckbox;
  public journeyCheckboxes: JourneyCheckboxes;

  constructor(  hasFromPrice: boolean, price: number, noPrice: number, minPrice: number, inboundPrice: number,
                outboundPrice: number, paxCount: number, isMultiCity: boolean, isOneWay: boolean,
                isOutboundEnabled: boolean, isOnlyOutboundEnabled: boolean, isInboundEnabled: boolean,
                isOnlyInboundEnabled: boolean, currencyCode: string, decimalSeparator: string){


      const outboundCheckbox = isOneWay || (!isOneWay && !isOnlyInboundEnabled);
      const inboundCheckbox = !isOneWay;

      this.journeyCheckboxes = new JourneyCheckboxes(inboundCheckbox, outboundCheckbox);

      const contentTotal = new ContentTotal(paxCount, isOneWay,
        isOnlyInboundEnabled, this.journeyCheckboxes);

      this.isPossibleToShowOutboundCheckbox = outboundCheckbox;
      this.isPossibleToShowInboundCheckbox = inboundCheckbox;

      this.contentTotalWithPrice = new ContentTotalWithPrice(contentTotal, inboundPrice,
        outboundPrice, price, noPrice, currencyCode, decimalSeparator);

      this.contentTotalByJourney = new ContentTotal(paxCount, isOneWay,
        isOnlyInboundEnabled, this.journeyCheckboxes);

      this.contentHeader = new ContentHeader(minPrice, hasFromPrice, currencyCode, decimalSeparator);

      this.outboundContentJourneyCheckbox = new ContentJourneyCheckbox(isMultiCity, JourneyType.Outbound,
        this.journeyCheckboxes);

      this.inboundContentJourneyCheckbox = new ContentJourneyCheckbox(isMultiCity, JourneyType.Inbound,
        this.journeyCheckboxes);
  }
}
