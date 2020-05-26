import { JourneyType } from 'src/app/priority-boarding-popup-c3/enums/journey.type';
import { JourneyCheckboxes } from '../../models/journey-checkboxes';

export class ContentJourneyCheckbox{
  public isMultiCity: boolean;
  public journeyType: JourneyType;
  public journeyCheckboxes: JourneyCheckboxes;
  public isCallToActionClicked: boolean;

  constructor(isMultiCity: boolean, journeyType: JourneyType, journeyCheckboxes: JourneyCheckboxes){
    this.isMultiCity = isMultiCity;
    this.journeyType = journeyType;
    this.journeyCheckboxes = journeyCheckboxes;
    this.isCallToActionClicked = false;
  }
}
