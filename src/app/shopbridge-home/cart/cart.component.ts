import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { IProducts } from '../../shopbridge-service/shopbridge.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartTableColumns: string[] = ['item'];
  quanityList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  @Input() cartItemsList: IProducts[];

  constructor(private cdr: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.cartItemsList = [...this.cartItemsList];
  }

  onRemoveItemClick(itemId) {
    this.cartItemsList = this.cartItemsList.filter(function (ele) {
      return ele.id != itemId;
    })
    this.cdr.detectChanges();
  }

}
