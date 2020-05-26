export class ContentHeader {
  public minPrice: number;
  public hasFromPrice: boolean;
  public currencyCode: string;
  public decimalSeparator: string;

  constructor(minPrice: number, hasFromPrice: boolean, currencyCode: string, decimalSeparator: string) {
    this.minPrice = minPrice;
    this.hasFromPrice = hasFromPrice;
    this.currencyCode = currencyCode;
    this.decimalSeparator = decimalSeparator;
  }
}

