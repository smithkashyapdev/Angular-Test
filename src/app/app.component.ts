import { Component } from '@angular/core';
import { CartServiceService } from './service/cart-service.service';
import { ProductService } from './service/ProductService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 

  selectedMenu:string=""
  totalPrice: number = 0.00
  totalQuantity: number = 0

  constructor(private mService:ProductService,private cartService: CartServiceService) {}

 


  
  

 
}
