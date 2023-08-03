import { UserAuthService } from "../_services/user-auth.service";
import { Agent } from "./agent";

export class BranchMan {
    constructor(
        public authService?:UserAuthService,
        public userId?:number,
        public firstName?:string,
        public lastName?:string,
        public username?:string,
        public password?:string,
        public branchAgents?:Agent[],
        public commissionPrcnt?:number,
        public city?:string

    ){}
}
