import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService, private enrutador: Router) {}

  ngOnInit() {
    //Se cargan los productos
    this.getProducts();
  }

  private getProducts() {
    //Se consume los datos del Observable (suscribirnos)
    this.productService.getProductList().subscribe(
      (data => {
      this.products = data;
      })
    );
  }

  editProduct(id: number){
    this.enrutador.navigate(['edit-product', id]);
  }
}
