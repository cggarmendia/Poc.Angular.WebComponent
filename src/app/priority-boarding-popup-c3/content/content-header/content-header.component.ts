import { Component, OnInit, Input } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { ContentHeader } from './models/content-header';
import { CustomCurrencyPipe } from 'src/app/shared/pipes/custom-currency.pipe';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.sass']
})
export class ContentHeaderComponent extends BaseComponent implements OnInit {
  @Input() model: ContentHeader;
  public textOfHeaderContentPrice: string;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService,
              private customCurrency: CustomCurrencyPipe) {
    super(settingsProvider);
  }

  ngOnInit() {
    this.textOfHeaderContentPrice = this.model.hasFromPrice
    ? this.labelsProvider.translate('contentHeaderPriceFrom')
    : this.labelsProvider.translate('contentHeaderPriceFor');
  }

  public getMinPrice(): string{
    return this.customCurrency.transform(this.model.minPrice, false, this.model.currencyCode,
      this.model.decimalSeparator);
  }

}
