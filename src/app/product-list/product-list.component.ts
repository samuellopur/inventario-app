import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    //Se cargan los productos
    this.getProducts();
  }

  private getProducts() {
    //Se consume los datos del Observable (suscribirnos)
    this.productService.getProductList().subscribe((data) => {
      this.products = data;
    });
  }
}
