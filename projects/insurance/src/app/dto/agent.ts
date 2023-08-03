import { Customer } from "./customer";

export class Agent {
    constructor(
        public userId?:number,
        public firstName?:string,
        public lastName?:string,
        public username?:string,
        public password?:string,
        public custList?:Customer[],
        public commission?:number
    ){}

    getCustList() {
        return this.custList!
    }
}
