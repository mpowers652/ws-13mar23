import { Job } from "./job";
export class JobColl {
    jobs:Job[] = [
        new Job("Kitchen Team Member", "2 Bar Bowl", "I would do a couple things including cook meals for customers and prepare ingredients for the other cooks", 
            ['line cook','food prep', 'coordinate with others'], "https://www.2barbowl.com/", "2023-10-10", "2023-12-10", "Paul"),
        
    ]
    /*
    constructor() {
        job = new Job("Kitchen Team Member", "2 Bar Bowl", "I would do a couple things including cook meals for customers and prepare ingredients for the other cooks", 
            ['line cook','food prep', 'coordinate with others'], "https://www.2barbowl.com/", "2023-10-10", "2023-12-10", "Paul")
        
    }*/
    public get jobList() : Job[] {
        return this.jobs
    }
    
}
