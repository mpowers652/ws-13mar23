import { Component } from '@angular/core';

@Component({
  selector: 'app-ceo',
  templateUrl: './ceo.component.html',
  styleUrls: ['./ceo.component.css']
})
export class CeoComponent {
  willDisplayPayments: boolean = false;
  toggleReport() {
    this.willDisplayReport = !this.willDisplayReport
  }
  willDisplayCrud: boolean = false;
  willDisplayReport: boolean = false;
  toggleCrud() {
    this.willDisplayCrud = !this.willDisplayCrud
  }

  togglePayments() {
    this.willDisplayPayments = !this.willDisplayPayments
  }

}
