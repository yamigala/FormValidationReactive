import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tickets = [
    
        { fromStation: "valsad", toStation: " valsad" , noOfTickets:1 ,  typeOfTicket:"AC" , date : 12/12/2018 , trainNo : 52020 },
        { fromStation: "Vapi", toStation: "Vapi" , noOfTickets:2 ,  typeOfTicket:"nonAC" , date : 2/12/2018 , trainNo : 25200 },
        { fromStation: "Sura", toStation: " valsad" , noOfTickets:3 ,  typeOfTicket:"AC" , date : 12/1/2018 , trainNo : 69690 },
        { fromStation: "Bilimora", toStation: " valsad" , noOfTickets:4 ,  typeOfTicket:"nonAC" , date : 12/5/2018 , trainNo : 25020 },
        { fromStation: "Navsari", toStation: " valsad" , noOfTickets:5 ,  typeOfTicket:"General" , date : 1/12/2018 , trainNo : 78965 }
  
    ];
    return {tickets};
  }
}
  