import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1-hello-world';
  prodid:number = 999
  prodName:string = 'Iphone-14'
  price:number = 2500
  submitString:string = "Add Product"
  formMethod:string = "POST"
  submitAction:string = "http://localhost:8080/api/customers/products"
  class1:string = "class-1"
  class2: string = "class-2"
  fontSizeNoUnits:string = "30"
  fontSizeUnits:string = "30px"

  getPriceFor10(): number {
    return this.price * 10;
  }
  getUpperCaseName(): string {
    return this.prodName.toUpperCase();
  }
  getClassObject() {
    return {
    "text-center bg-primary p-1 text-white": this.price > 1000,
    "bg-danger": this.price > 3000
    }
  }

  getStyleObject() {
    return {
      fontSize: "40px",
      backgroundColor: "black",
      color: this.price > 3000 ? "red" : "green"
    }
  }

  saveProduct(event:any) {
    alert("Saving product now" + event)
    console.log("Product Saved")
  }

}
