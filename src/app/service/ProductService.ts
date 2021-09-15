import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product';
import { ProductCategory } from '../model/productCategory';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://10.0.2.2:8080/api/products';

  private categoryUrl = 'http://10.0.2.2:8080/api/product-category';
  this: any;


  constructor(private httpClient: HttpClient) { 

    
  }


  

  getProduct(theProductId: number): Observable<Product> {

    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get<Product>(productUrl,{ headers: headers });
  }


  getCategories(): Observable<ProductCategory[]> {

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Headers', 'Content-Type')
    .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
    .set('Access-Control-Allow-Origin', '*');


    return this.httpClient.get<GetResponseProductCategories>(this.categoryUrl,{ headers: headers })
    .pipe( map(response => response._embedded.productCategory) );

  }


  getProducts(): Observable<Product[]> {

    // need to build URL based on product id
    const productsUrl = this.baseUrl;

    return this.httpClient.get<GetResponseProducts>(productsUrl).pipe(
       map(response => response._embedded.products)
    );
  }

  getProductListPaginate(thePage: number, 
                         thePageSize: number, 
                         theCategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on category id, page and size 
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                    + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseProducts>(searchUrl);
   }

   getSearchProductsPaginate(pageNumber: number, pageSize: number, searchKeyword: string): Observable<GetResponseProducts> {
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${searchKeyword}`
     + `&page=${pageNumber}&size=${pageSize}`;
    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

}


interface GetResponseProducts {
  _embedded: {
    products: Product[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}


interface GetResponseProductCategories {
  _embedded: {
    productCategory: ProductCategory[];
  }
}

