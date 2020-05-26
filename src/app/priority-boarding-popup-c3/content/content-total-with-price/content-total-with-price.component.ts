import { Component, OnInit, Input } from '@angular/core';
import { SettingsProviderService } from 'src/app/core/settings-provider.service';
import { LabelsProviderService } from 'src/app/core/labels-provider.service';
import { BaseComponent } from 'src/app/shared/base/base.component';
import { JourneyType } from '../../enums/journey.type';
import { ContentTotalWithPrice } from './models/content-total-with-price';
import { ContentTotalService } from './content-total-with-price.service';
import { StrategyExecutes, StrategyService } from 'src/app/core/strategy.service';

@Component({
  selector: 'content-total-with-price',
  templateUrl: './content-total-with-price.component.html',
  styleUrls: ['./content-total-with-price.component.sass'],
  providers: [ContentTotalService]
})
export class ContentTotalWithPriceComponent extends BaseComponent implements OnInit {
  @Input() model: ContentTotalWithPrice;
  public priceHtmlMap: Map<JourneyType, string>;

  constructor(public settingsProvider: SettingsProviderService, public labelsProvider: LabelsProviderService,
              private contentTotalService: ContentTotalService) {
    super(settingsProvider);
  }

  ngOnInit() {
  }

  public getText(): string {

    const strategies: { [type: string]: StrategyExecutes } = {
      textOfPriceHtml: {
        condition: () => this.model.contentTotal.journeyCheckboxes.outboundCheckbox
                          && this.model.contentTotal.journeyCheckboxes.inboundCheckbox,
        confirm: () => this.contentTotalService.getTextOfPriceHtml(JourneyType.All, this.model.price,
                                                                    this.model)
      },
      textOfOutboundPriceHtml: {
        condition: () => this.contentTotalService.isPossibleToShowTextOfOutboundPriceHtml(this.model),
        confirm: () => this.contentTotalService.getTextOfPriceHtml(JourneyType.Outbound, this.model.outboundPrice,
          this.model)
      },
      textOfInboundPriceHtml: {
        condition: () => !this.model.contentTotal.isOneWay
                          && !this.model.contentTotal.journeyCheckboxes.outboundCheckbox
                            && this.model.contentTotal.journeyCheckboxes.inboundCheckbox,
        confirm: () => this.contentTotalService.getTextOfPriceHtml(JourneyType.Inbound, this.model.inboundPrice,
          this.model)
      },
      textOfNoPriceHtml: {
        condition: () => this.contentTotalService.isPossibleToShowTextOfNoPriceHtml(this.model),
        confirm: () => this.contentTotalService.getTextOfNoPriceHtml(this.model)
      }
    };

    return StrategyService.evaluateStrategyExecutes(strategies);
  }

  public applyMarginBottom30(): boolean {
    return this.model.contentTotal.isOneWay || (!this.model.contentTotal.isOneWay
           && this.model.contentTotal.isOnlyInboundEnabled);
  }

}
