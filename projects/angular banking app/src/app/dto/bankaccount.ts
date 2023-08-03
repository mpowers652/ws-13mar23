import { Customer } from "./customer";

export class Bankaccount {
    constructor(public actNumber?: number,
        public actType?:string,
        public actBalance?: number,
        public actCreationDate?: Date,
        public customer?:Customer){    }
}
