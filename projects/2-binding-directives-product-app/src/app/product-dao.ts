import { Product } from "./product";
import { ProductDatasource } from "./product-datasource";

export class ProductDao {
    private dataSource: ProductDatasource | undefined
    private products: Product[] | undefined
    constructor() {
        this.dataSource = new ProductDatasource();
        this.products = this.dataSource.getProducts()
        //this.products = new Array<Product>()
        //this.dataSource.getProducts().forEach(p=>this.products?.push(p))
    }
    //this method gets all the products
    getProducts():Product[] {
        return this.products!
    }
    //this method gets a product by id
    getProduct(prodid:number | undefined):Product | undefined {
        return this.products?.find(p=>p.prodid ==prodid)
    }
    saveOrUpdate(product: Product | undefined) {
        //generate teh product id using some logic
        //check if the product is already in the database (ProdDataSoruce)
        let checkProduct = this.getProduct(product?.prodid)
        if (checkProduct == undefined) {
            //before adding new product we should generate the ID automatically
            //using some logic
            this.getProducts().sort((p1,p2) => p1.prodid! - p2.prodid!)
            let newId = this.getProducts().at(this.getProducts().length - 1)?.prodid! + 1
            //add a new product into the DB
            product!.prodid = newId
            this.getProducts().push(product!)
        } else {
            //code here to update the product in the products[] array
            //#1 get the index of the product parameter of the method
            let index = this.getProducts().indexOf(product!)
            //#2 use the splice method to replace the existign product at the 
            //index retrieved
            this.getProducts().splice(index, 1, product!)
        }
    }
    deleteProduct(prodid:number) {
        let index = this.getProducts().findIndex(p=>p.prodid === prodid)
        if (index > -1) { //if it is found...
            this.getProducts().splice(index, 1) 
            //remove 1 element starting from the given index
        }
    }
    
}
