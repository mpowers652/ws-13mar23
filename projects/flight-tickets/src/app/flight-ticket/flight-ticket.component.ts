import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { last, lastValueFrom } from 'rxjs';
import { FlightTicket } from '../flight-ticket';
import { FlightTicketService } from '../flight-ticket.service';

@Component({
  selector: 'app-flight-ticket',
  templateUrl: './flight-ticket.component.html',
  styleUrls: ['./flight-ticket.component.css']
})
export class FlightTicketComponent implements OnInit{

  public flightColl?:FlightTicket[]
  public flight:FlightTicket = new FlightTicket()
  public isUpdating:boolean = false
  public isFormSubmitted:boolean = false
  constructor(
    private flightService?: FlightTicketService
  ){}

  ngOnInit() {
    this.findAllFlights()
  }

  async findAllFlights() {
    this.flightColl = await lastValueFrom(this.flightService!.findAllTickets()) as FlightTicket[]
  }
  async findFlightById(tktNumber:number) {
    this.flight = await lastValueFrom(this.flightService?.findTicketById(tktNumber)!) as FlightTicket
  }
  async updateOrAddFlight(tktNumber:number, flight:FlightTicket) {
    if (this.isUpdating) {
      this.flight = await lastValueFrom(this.flightService?.updateTicket(tktNumber,flight)!) as FlightTicket
      
    } else {
      this.flight = await lastValueFrom(this.flightService?.addTicket(flight)!) as FlightTicket
    }
    this.findAllFlights()
  }
  async deleteFlight(tktNumber:number) {
    await lastValueFrom(this.flightService?.deleteTicketByid(tktNumber)!)
    this.findAllFlights()
  }
  async submitForm(productForm: NgForm) {
    this.isFormSubmitted = true
    //if(productForm.valid) {
    //the code to submit such as adding to the db
    // if (!this.isUpdating) {
    //   this.product!.prodId! = this.products?.at(this.products.length-1)?.prodId! +1
    // } 
    //this.flight = await lastValueFrom(this.flightService.save(this.product, this.isUpdating))
    this.updateOrAddFlight(this.flight.tktNumber!,this.flight) as FlightTicket
    this.isUpdating = false;
    this.findAllFlights()
    this.flight = new FlightTicket()
    productForm.reset()
    this.isFormSubmitted = false

  }
}
