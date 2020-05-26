import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent extends BaseComponent implements OnInit {
  @Output() closePopupClicked: EventEmitter<void> =
    new EventEmitter<void>();

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService) {
    super(settingsProvider);
  }

  public ngOnInit(): void {
  }

  public onClosePopupClick() {
    this.closePopupClicked.emit();
  }
}
