import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/ProductService';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage implements OnInit {

  selectedMenu:string=""
  totalPrice: number = 0.00
  totalQuantity: number = 0

  constructor(private mService:ProductService,private cartService: CartServiceService) {}

 

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

    // subscribe to the cart total quantity
    this.cartService.selectedMenu.subscribe (
      data => this.selectedMenu = data
    )

  }


}
