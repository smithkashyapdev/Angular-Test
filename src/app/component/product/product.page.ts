import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cartItem';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: Product = new Product();
  constructor(private productService: ProductService, private cartService: CartServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe (() => {
      this.loadProduct()
    });
  }

  loadProduct() {
    // get id from activated route in string param and convert it to number using + symbol
    const productId = +this.route.snapshot.paramMap.get('id')

    this.productService.getProduct(productId).subscribe(
       data => {
         this.product = data
       } 
    );
    
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product)
    console.log('Product name:', product.name)
    this.cartService.addToCart(cartItem)
    
}

}
