export class Job {
    title:string = '';
    company:string = '';
    summary:string = '';
    duties:string[] = [];
    locUrl:string = '';
    startDate:string = '';
    endDate:string = '';
    contact:string = '';

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
}
