export interface PriorityBoardingPopupC3 {
  currencyCode: string;
  noPrice: number;
  price: number;
  inboundPrice: number;
  outboundPrice: number;
  hasFromPrice: boolean;
  minPrice: number;
  isAllowed: boolean;
  isOutboundEnabled: boolean;
  isInboundEnabled: boolean;
  paxCount: number;
  isOneWay: boolean;
  isMultiCity: boolean;
  isOnlyOutboundEnabled: boolean;
  isOnlyInboundEnabled: boolean;
  buttonSubmitIdSuffix: string;
  buttonSubmitAttribute: string;
  outputEventName: string;
  inputEventName: string;
  decimalSeparator: string;
}
