import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FakedataService } from '../../fakedata.service';
import { FormService } from '../../form.service';
import { Irctc } from '../../../irctc.model';

// export interface Irctc{
//   fromStation: string;
//   toStation: string;
//   noOfTicket: number;
//   typeOfTicket: string;
//   date: Date;
//   trainNo: number;
// }

@Component({
  selector: 'app-bookedtickets',
  templateUrl: './bookedtickets.component.html',
  styleUrls: ['./bookedtickets.component.css']
})
export class BookedticketsComponent implements OnInit {

  tickets : Irctc [];
     /** URL to web api */

  constructor(private formservice : FormService) { }

  ngOnInit() {
   let t=this.formservice.getTicketData().subscribe(
      data => this.tickets = data
    )
    console.log("hello",t);
    
  }


}
