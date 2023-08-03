import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private endpointUrl:string = `http://localhost:9090/products`
  constructor(private http:HttpClient) { 

  }

  get getAllProducts() {
    return this.http.get(this.endpointUrl) //return observable
  }

  save(product: Product | undefined, isUpdating:boolean) {
    //this method is executed for both "Add Record" as well as Update Record
    //if "add record" then we have to make a call to http.post() else http.put()
    if (isUpdating) {
      return this.http.put(this.endpointUrl,product)
    } else {
      return this.http.post(this.endpointUrl,product)
    }
  }

  deleteProduct(prodId: number | undefined) {
    return this.http.delete(this.endpointUrl+`/${prodId}`)
  }
}
