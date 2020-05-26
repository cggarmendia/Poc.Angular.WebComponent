import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JourneyType } from '../../enums/journey.type';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { ContentJourneyCheckbox } from './models/content-journey-checkbox';

@Component({
  selector: 'content-journey-checkbox',
  templateUrl: './content-journey-checkbox.component.html',
  styleUrls: ['./content-journey-checkbox.component.sass']
})
export class ContentJourneyCheckboxComponent extends BaseComponent implements OnInit {
  @Input() model: ContentJourneyCheckbox;
  @Output() checkboxClicked: EventEmitter<boolean> =
    new EventEmitter<boolean>();
  public isInbound: boolean;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService) {
  super(settingsProvider);
  }

  ngOnInit() {
    this.isInbound = this.model.journeyType === JourneyType.Inbound;
  }

  public isChecked(): boolean {    
    return this.isInbound ? this.model.journeyCheckboxes.inboundCheckbox 
                          : this.model.journeyCheckboxes.outboundCheckbox;
  }

  public onChange(value: any): void {
    if(!this.model.isCallToActionClicked){
      this.isInbound ? this.model.journeyCheckboxes.inboundCheckbox = !this.model.journeyCheckboxes.inboundCheckbox
                      : this.model.journeyCheckboxes.outboundCheckbox = !this.model.journeyCheckboxes.outboundCheckbox;
      this.checkboxClicked.emit(value.target.checked);
    }    
  }

}
