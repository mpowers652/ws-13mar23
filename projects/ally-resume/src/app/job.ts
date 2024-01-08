export class Job {
    constructor(
    public title:string,
    public company:string,
    public summary:string,
    public duties:string[],
    public locUrl:string,
    public startDate:string,
    public endDate:string,
    public contact:string
    ){}
/*
    constructor(
        jobTitle:string, jobComp:string, jobSumm:string,
        jobDuties:string[], jobUrl:string, jobStart:string,
        jobEnd:string, jobContact:string
    ){
        this.title = jobTitle;
        this.company = jobComp;
        this.summary = jobSumm;
        this.duties = jobDuties;
        this.locUrl = jobUrl;
        this.startDate = jobStart;
        this.endDate = jobEnd;
        this.contact = jobContact;
    }
    */
}
