import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-header-price',
  templateUrl: './content-header-price.component.html',
  styleUrls: ['./content-header-price.component.sass']
})
export class ContentHeaderPriceComponent implements OnInit {
  @Input() keyOfI18n: string;
  @Input() price: string;

  constructor() { }

  ngOnInit() {
  }

}
