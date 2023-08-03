import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Offers } from '../dto/offers';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  offersEndPointUrl:string='http://localhost:8080/offers'
  constructor(private http:HttpClient,
    private router:Router) { }


    saveOffer(offer:Offers){
      return this.http.post(this.offersEndPointUrl,offer)
    }

}
