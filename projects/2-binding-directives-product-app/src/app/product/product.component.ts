import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product';
import { ProductDatasource } from '../product-datasource';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  dataSource:ProductDatasource = new ProductDatasource()
  selectedProduct:string | undefined= ''
  prodName:string = "test-name"
  product:Product = new Product() //this object is bound to <form-tag> inputs
  getTitleClass() {
    return this.dataSource.getProducts().length>0 ? 'bg-success' : 'bg-danger'
  }

  isSame(product:Product):boolean {
    return product.prodname ===this.selectedProduct
  }
  addProduct(product:Product) {
    this.dataSource.getProducts().push(product)
    console.log(this.productJsonToString)
    console.log(`${product.prodname} ${product.price} ${product.category}`)
  }
  get productJsonToString() { //behaves like variable instead when get is used
    return JSON.stringify(this.product)
  }
  submitForm(productForm: NgForm) {
    this.isFormSubmitted = true
    if(productForm.valid) {
      //the code to submit such as adding to the db
      this.dataSource.getProducts().push(this.product)
      this.product = new Product()
      productForm.reset()
      this.isFormSubmitted = false
    }
  }
  isFormSubmitted:boolean = false
}
