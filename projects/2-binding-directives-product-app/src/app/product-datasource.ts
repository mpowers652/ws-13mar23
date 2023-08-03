import { Product } from "./product";

export class ProductDatasource {
    private products:Product[] = [];
    constructor() {
        this.products = [
            new Product(101, 'IPhone-14', 2500, 'Mobile-Phones'),
            new Product(102, 'IPhone-13', 2300, 'Mobile-Phones'),
            new Product(103, 'S-22-Ultra', 2400, 'Mobile-Phones'),
            new Product(104, 'S23', 2800, 'Mobile-Phones'),
            new Product(105, 'Google Nest Mini', 150, 'Gadgets'),
            new Product(106, 'Alexa', 180, 'Gadgets'),
            new Product(107, 'Siri', 175, 'Gadgets')
        ]
    }
    getProducts(): Product[] {
        return this.products
    }
}
