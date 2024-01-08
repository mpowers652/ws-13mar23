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
}
