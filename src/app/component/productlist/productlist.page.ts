import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/model/cartItem';
import { Product } from 'src/app/model/product';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { ProductService } from 'src/app/service/ProductService';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.page.html',
  styleUrls: ['./productlist.page.scss'],
})
export class ProductlistPage implements OnInit {

  productsbyName = []
  products = []
  currentCategoryId = 1
  previousCategoryId = 1
  searchMode: boolean = false 

  constructor(private productService: ProductService,private cartService: CartServiceService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts()
    });
  }



  listProducts() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword')
    if (this.searchMode) {
      this.handleSearchProducts()
    }
    else {
      // If no search keyword then go to handleListProducts
      this.handleListProducts()
    }

  }

  handleListProducts() {
    // check if id parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id') 
    if (hasCategoryId) {
      // get "id" param string and convert  string to number using + symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')
      if(this.currentCategoryId===1){
        this.cartService.changeToolbarTitle('Books')
      }
      else{
        this.cartService.changeToolbarTitle('Mugs')
      }
    }
    else {
      this.currentCategoryId = 1
      this.cartService.changeToolbarTitle('Books')
    }
    
    this.productService.getProductListPaginate(1, 10, this.currentCategoryId).subscribe ( // adding static pagenumber and page size here
      data => {
        this.products = data._embedded.products;
        this.productsbyName=this.products
      }
    )

  }

  getProducts() {
    this.productService.getProducts().subscribe (
      data => {
        console.log('Products ='+ JSON.stringify(data));
        this.products = data;
      }
    );
  }

  addToCart(product: Product) {
    const cartItem = new CartItem(product)
    console.log('Product name:', product.name)
    this.cartService.addToCart(cartItem)
    
}

handleSearchProducts() {
  const keyword = this.route.snapshot.paramMap.get('keyword')

  this.productService.getSearchProductsPaginate(0, 5, keyword).subscribe (
    data =>  {
      this.products = data._embedded.products
    }
  )

}

clickOn(){
  console.log('clicked')
}

searchType(obj:any){
  const substring:string = obj.target.value;
  if(substring.length==0){
    this.productsbyName=this.products
    return
  }
  else{
    console.log(substring)

    var departmentList = this.products.filter(function(item){  
      return item.name == substring;  
   });  
    this.productsbyName = this.products.filter(function(item:Product){  
 
      return item.name.toLowerCase().startsWith(substring);  
   })
    
    console.log(this.productsbyName)
  }
}

 filterItems(arr, query) {
  return arr.filter((item: Product) => item.name == query)
}

}
