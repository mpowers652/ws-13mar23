import { BranchMan } from "./branch-man";

export class Ceo {
    constructor(
        public username:string,
        public password:string, 
        public firstName:string, 
        public lastName:string,
        public userId:number,
        public branches?: BranchMan[]
    ){}
}
