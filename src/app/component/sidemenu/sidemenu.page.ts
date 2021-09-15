import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/ProductService';

import { Router } from '@angular/router';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.page.html',
  styleUrls: ['./sidemenu.page.scss'],
})
export class SidemenuPage implements OnInit {

  productCategory = [];

  constructor(private router:Router,private productService: ProductService) { }

  ngOnInit(): void {
    this.listProductCategories()
  }

  listProductCategories() {
    this.productService.getCategories().subscribe (
      data => {
        console.log('Product Categories= '+ JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }

  getProductList(){
    console.log('testttt')
    this.router.navigateByUrl(`/productlist`);
  }

}
