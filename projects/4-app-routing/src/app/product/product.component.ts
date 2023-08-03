import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products?: Product[] //used for collection operations
  product: Product = new Product(); //connected to form
  isFormSubmitted: boolean = false
  isUpdating: boolean = false;
  constructor(private prodService: ProductService) {

  }
  ngOnInit(): void { //lifecycle hook/method
    //gets executed right after constructor
    this.getAllProducts()
  }

  async getAllProducts() { //
    this.products = await lastValueFrom(this.prodService.getAllProducts) as Product[]
  }

  async submitForm(productForm: NgForm) {
    this.isFormSubmitted = true
    //if(productForm.valid) {
    //the code to submit such as adding to the db
    // if (!this.isUpdating) {
    //   this.product!.prodId! = this.products?.at(this.products.length-1)?.prodId! +1
    // } 
    this.product = await lastValueFrom(this.prodService.save(this.product, this.isUpdating))
    
    this.isUpdating = false;
    this.getAllProducts()
    this.product = new Product()
    productForm.reset()
    this.isFormSubmitted = false

  }

  findProduct(prodId: number | undefined) {
    this.product = this.products?.find(p => p.prodId === prodId)!
    this.isUpdating = true;
  }

  async deleteProduct(prodId: number | undefined) {
    await lastValueFrom(this.prodService.deleteProduct(prodId))
    this.refresh()     
    this.getAllProducts()
  }

  refresh() {
    this.getAllProducts()
  }

}
