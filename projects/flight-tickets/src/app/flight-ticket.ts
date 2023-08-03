export class FlightTicket {
    constructor(
        public tktNumber?:number,
        public origin?:string,
        public destination?:string,
        public passengerName?:string
    ) {
    }
}
