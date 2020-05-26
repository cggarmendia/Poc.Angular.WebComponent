import { Component } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';

@Component({
  selector: '',
  template: '',
  styles: ['']
})
export class BaseComponent {

  public staticServerUri: string;

  public constructor(protected settingsProvider: SettingsProviderService) {
    this.staticServerUri = this.settingsProvider.GetProperty('staticStyles');
  }

}
