import { ContentTotal } from '../../models/content-total';

export class ContentTotalWithPrice {
  public contentTotal: ContentTotal;
  public inboundPrice: number;
  public outboundPrice: number;
  public price: number;
  public noPrice: number;
  public currencyCode: string;
  public decimalSeparator: string;

  constructor(contentTotal: ContentTotal, inboundPrice: number, outboundPrice: number, price: number,
              noPrice: number, currencyCode: string, decimalSeparator: string){
    this.contentTotal = contentTotal;
    this.inboundPrice = inboundPrice;
    this.outboundPrice = outboundPrice;
    this.price = price;
    this.noPrice = noPrice;
    this.currencyCode = currencyCode;
    this.decimalSeparator = decimalSeparator;
  }
}
