import { Customer } from "./customer";

export class Offers {
    constructor(
        public offerId?:number,
        public offerName?:string,
        public loanAmount?: number,
        public interestRate?:number,
        public intFreeCash?:number,
        public annualFee?:number,
        public preclosureCharges?: number,
        public customerId?:number
    ){

    }
}

