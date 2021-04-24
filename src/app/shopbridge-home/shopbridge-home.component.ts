import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ShopbridgeService, IProducts } from '../shopbridge-service/shopbridge.service';

@Component({
  selector: 'app-shopbridge-home',
  templateUrl: './shopbridge-home.component.html',
  styleUrls: ['./shopbridge-home.component.css']
})
export class ShopbridgeHomeComponent implements OnInit {

  productsDataList: IProducts[] = [];
  cartItemsList: IProducts[] = [];
  showProducts: boolean = true;
  showCart: boolean = false;

  constructor(
    public router: Router,
    public shopBridgeService: ShopbridgeService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.shopBridgeService.getProductsData().subscribe((res: IProducts[]) => {
      this.productsDataList = res;
    })
  }

  onProductsClick() {
    this.showProducts = true;
    this.showCart = false;
  }

  oncartClick() {
    this.showCart = true;
    this.showProducts = false;
  }

  getCartItems(cartItems) {
    this.cdr.detectChanges();
    this.cartItemsList = [...this.cartItemsList];
    this.cartItemsList.push(cartItems);
  }

}
