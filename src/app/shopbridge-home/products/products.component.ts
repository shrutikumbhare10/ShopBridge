import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IProducts } from '../../shopbridge-service/shopbridge.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsData: IProducts[] = [];

  @Input() productsDataList;
  @Output() addItemToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCartClick(item) {
    this.addItemToCart.emit(item)
  }

}
