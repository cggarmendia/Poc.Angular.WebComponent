import { Component, OnInit } from '@angular/core';
import { ExternalEventManagerService } from '../core/external-event-manager.service';
import { LabelsProviderService } from '../core/labels-provider.service';
import { SettingsProviderService } from '../core/settings-provider.service';
import { BaseComponent } from '../shared/base/base.component';
import { PriorityBoardingPopupC3 } from './models/priority-boarding-popup-c3';
import { CallToAction } from './enums/call-to-action';
import { Content } from './content/models/content';

@Component({
  templateUrl: './priority-boarding-popup-c3.component.html',
  styleUrls: ['./priority-boarding-popup-c3.component.scss'],
  providers: [SettingsProviderService, ExternalEventManagerService]
})
export class PriorityBoardingPopupC3Component extends BaseComponent implements OnInit {
  public showPopup: boolean;
  public isReturnPRBZSelected: boolean;
  public isDeparturePRBZSelected: boolean;
  public isOwPRBZSelected: boolean;
  public content: Content;
  public model: PriorityBoardingPopupC3;

  public constructor(public settingsProvider: SettingsProviderService, private labelsProvider: LabelsProviderService,
                     private eventManager: ExternalEventManagerService) {
    super(settingsProvider);
  }

  public ngOnInit(): void {
    this.model = this.settingsProvider.GetData();
    this.content = this.getContentModelFromPriorityBoardingPopupC3Model();

    this.attachEvents();

    this.setFalseInAllInputHidden();
    this.setShowPopup(false);
  }

  public onClosePopupClicked() {
    this.setFalseInAllInputHidden();
    this.setShowPopup(false);
  }

  public onCallToActionClicked(value: CallToAction) {
    this.content.inboundContentJourneyCheckbox.isCallToActionClicked = true;
    this.content.outboundContentJourneyCheckbox.isCallToActionClicked = true;
    if (value === CallToAction.ContinueWithPriorityBoarding) {
      if (!this.content.journeyCheckboxes.inboundCheckbox && !this.content.journeyCheckboxes.outboundCheckbox) {
        this.setJourneyCheckboxValue(true);
      }
      this.setValueInAllInputHiddenFromContentService();
    } else {
      this.setJourneyCheckboxValue(false);
      this.setFalseInAllInputHidden();
    }
    const data = {
      buttonSubmitSelector: `[id$=${this.model.buttonSubmitIdSuffix}][${this.model.buttonSubmitAttribute}]`
    };
    this.eventManager.triggerGlobalEvent(this.model.outputEventName, data);
  }

  private showPopupFromOutsideOfComponent() {
    if (!this.showPopup && !this.content.inboundContentJourneyCheckbox.isCallToActionClicked) {
      this.setShowPopup(true);
    }
  }

  private setShowPopup(value: boolean): void {
    this.showPopup = value;
  }

  private attachEvents() {
    if (this.model.isAllowed){
      this.eventManager.addGlobalEvent(this.model.inputEventName,
      this.showPopupFromOutsideOfComponent, this);
    }
  }

  private setFalseInAllInputHidden() {
    this.isReturnPRBZSelected = false;
    this.isDeparturePRBZSelected = false;
    this.isOwPRBZSelected = false;
  }

  private setValueInAllInputHiddenFromContentService() {
    if (!this.model.isOneWay) {
      this.isReturnPRBZSelected = this.content.journeyCheckboxes.inboundCheckbox;
      this.isDeparturePRBZSelected = this.content.journeyCheckboxes.outboundCheckbox;
      this.isOwPRBZSelected = false;
    } else {
      this.isReturnPRBZSelected = false;
      this.isDeparturePRBZSelected = false;
      this.isOwPRBZSelected = this.content.journeyCheckboxes.inboundCheckbox
      || this.content.journeyCheckboxes.outboundCheckbox;
    }
  }

  private setJourneyCheckboxValue(value: boolean) {
    if (this.model.isOneWay || (!this.model.isOneWay && !this.model.isOnlyInboundEnabled)) {
      this.content.journeyCheckboxes.outboundCheckbox = value;
    }
    if (!this.model.isOneWay) {
      this.content.journeyCheckboxes.inboundCheckbox = value;
    }
  }

  private getContentModelFromPriorityBoardingPopupC3Model(): Content{
    return new Content(this.model.hasFromPrice, this.model.price, this.model.noPrice,
      this.model.minPrice, this.model.inboundPrice, this.model.outboundPrice, this.model.paxCount,
      this.model.isMultiCity, this.model.isOneWay, this.model.isOutboundEnabled,
       this.model.isOnlyOutboundEnabled, this.model.isInboundEnabled,
      this.model.isOnlyInboundEnabled, this.model.currencyCode, this.model.decimalSeparator);
  }
}
