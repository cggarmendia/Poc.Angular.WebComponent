import { Component, OnInit, Input } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { ContentTotal } from '../models/content-total';

@Component({
  selector: 'content-total-by-journey',
  templateUrl: './content-total-by-journey.component.html',
  styleUrls: ['./content-total-by-journey.component.sass']
})
export class ContentTotalByJourneyComponent extends BaseComponent implements OnInit {
  @Input() model: ContentTotal;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService) {
    super(settingsProvider);
  }

  ngOnInit() {
  }

  public isOutboundCheckboxChecked(): boolean {
    return this.model.journeyCheckboxes.outboundCheckbox;
  }

  public isInboundCheckboxChecked(): boolean {
    return this.model.journeyCheckboxes.inboundCheckbox;
  }

}
