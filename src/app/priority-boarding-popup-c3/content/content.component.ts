import { Component, OnInit, Input } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { Content } from './models/content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent extends BaseComponent implements OnInit {
  @Input() model: Content;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService) {
    super(settingsProvider);
  }

  ngOnInit() {
  }

  public onOutboundCheckboxClicked(event) {
    this.model.contentTotalWithPrice.contentTotal.journeyCheckboxes.outboundCheckbox = event;
    this.model.contentTotalByJourney.journeyCheckboxes.outboundCheckbox = event;
  }

  public onInboundCheckboxClicked(event) {
    this.model.contentTotalWithPrice.contentTotal.journeyCheckboxes.inboundCheckbox = event;
    this.model.contentTotalByJourney.journeyCheckboxes.inboundCheckbox = event;
  }

}
