import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cartItem';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  cartItems: CartItem[] = []
  totalPrice: number = 0.00
  totalQuantity: number = 0

  constructor(private cartService: CartServiceService) { }

  ngOnInit() {
    console.log('Cart products intialiazied')
    this.listCartDetails()
  }

  listCartDetails() {
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems

    // subscribe to the cart total price
    this.cartService.totalPrice.subscribe (
      data => this.totalPrice = data
    )

    // subscribe to the cart total quantity
    this.cartService.totalQuantity.subscribe (
      data => this.totalQuantity = data
    )

    this.cartService.computeCartTotal()
  }

  incrementQuantity(cartItem: CartItem) {
    this.cartService.addToCart(cartItem)
  }

  decrementQuantity(cartItem: CartItem) {
     this.cartService.decrementQuantity(cartItem)
  }

  removeProduct(cartItem: CartItem) {
    this.cartService.remove(cartItem)
  }


}
