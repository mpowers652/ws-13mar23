import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightTicket } from './flight-ticket';

@Injectable({
  providedIn: 'root'
})
export class FlightTicketService {

  flight:FlightTicket = new FlightTicket()
  flightColl:FlightTicket[] = []
  private endpointUrl= `http://localhost:8082/flight`

  constructor(private http:HttpClient) { }

  findAllTickets() {
    return this.http.get(this.endpointUrl) //returns as observable
  }

  findTicketById(tktNumber:number) {
    return this.http.get(this.endpointUrl + `/${tktNumber}`)
  }

  updateTicket(tktNumber:number, flight: FlightTicket) {
    return this.http.put(this.endpointUrl + `/${tktNumber}`, flight)
  }

  addTicket(flight:FlightTicket) {
    return this.http.post(this.endpointUrl,flight)
  }

  deleteTicketByid(tktNumber:number) {
    return this.http.delete(this.endpointUrl + `/${tktNumber}`)
  }
}
