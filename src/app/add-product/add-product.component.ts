import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product = new Product();

  constructor(private productService: ProductService, private enrutador: Router){}

  onSubmit(){
    this.saveProduct();
  }

  saveProduct(){
    this.productService.addProduct(this.product).subscribe(
      {
        next: (datos) => {
          this.goListProducts();
        },
        error: (error: any) => {console.log(error)}
    })
  }

  goListProducts(){
    this.enrutador.navigate(['/products']);
  }

}
