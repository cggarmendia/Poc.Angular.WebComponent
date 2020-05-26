import { JourneyCheckboxes } from './journey-checkboxes';

export class ContentTotal {
  public paxCount: number;
  public isOneWay: boolean;
  public isOnlyInboundEnabled: boolean;
  public journeyCheckboxes: JourneyCheckboxes;

  constructor(paxCount: number, isOneWay: boolean, isOnlyInboundEnabled: boolean, journeyCheckboxes: JourneyCheckboxes){
    this.paxCount = paxCount;
    this.isOneWay = isOneWay;
    this.isOnlyInboundEnabled = isOnlyInboundEnabled;
    this.journeyCheckboxes = journeyCheckboxes;
  }
}
