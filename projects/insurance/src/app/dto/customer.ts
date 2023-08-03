import { EndUser } from "./end-user";

export class Customer{
    constructor(
        public userId?:number,
        public firstName?:string, 
        public lastName?:string,
        public username?:string,
        public password?:string,
        public dueDate?:Date,
        public premiumCost?:number,
        public remainingPayment?:number,
        public previousPayments?:Date[]
    ){
        //super(userId!,firstName!,lastName!,username!,password!);
    }

    public getDueDate(){return this.dueDate}
    public setDueDate(dueDate:Date) {this.dueDate = dueDate}
    public getPremiumCost(){return this.premiumCost}
    public setPremiumCost(premiumCost:number) {this.premiumCost = premiumCost}
    public getRemainingPayment(){return this.remainingPayment}
    public setRemainingPayment(remainingPayment:number) {this.remainingPayment = remainingPayment}
    public getPreviousPayments(){return this.previousPayments}
    public getId(){return this.userId}
}
