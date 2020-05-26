import { JourneyType } from '../../enums/journey.type';
import { JourneyCheckboxes } from './journey-checkboxes';

export class JourneyTypeAndCheckboxes{
  public journeyType: JourneyType;
  public journeyCheckboxes: JourneyCheckboxes;

  constructor(journeyType: JourneyType, journeyCheckboxes: JourneyCheckboxes){
    this.journeyType = journeyType;
    this.journeyCheckboxes = journeyCheckboxes;
  }
}
