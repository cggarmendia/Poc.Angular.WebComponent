import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { CallToAction } from '../enums/call-to-action';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent extends BaseComponent implements OnInit {
  @Output() callToAction: EventEmitter<CallToAction> =
    new EventEmitter<CallToAction>();
    public footerClicked: boolean;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService) {
    super(settingsProvider);
  }

  ngOnInit() {
  }

  public onContinueWithoutPrbzClick(): void {
    if (!this.footerClicked){
      this.footerClicked = true;
      this.callToAction.emit(CallToAction.ContinueWithoutPriorityBoarding);

    }
  }

  public onContinueWithPrbzClick(): void {
    if (!this.footerClicked){
      this.footerClicked = true;
      this.callToAction.emit(CallToAction.ContinueWithPriorityBoarding);
    }
  }
}
