import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.page.html',
  styleUrls: ['./cart-status.page.scss'],
})
export class CartStatusPage implements OnInit {


  totalPrice: number = 0.00
  totalQuantity: number = 0

  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    this.updateCartStatus()
  }

  updateCartStatus() {
    // subscribe to the cart total price
    this.cartService.totalPrice.subscribe (
      data => this.totalPrice = data
    )

    // subscribe to the cart total quantity
    this.cartService.totalQuantity.subscribe (
      data => this.totalQuantity = data
    )

  }

}
