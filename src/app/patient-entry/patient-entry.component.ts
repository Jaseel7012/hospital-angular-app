import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-entry',
  templateUrl: './patient-entry.component.html',
  styleUrls: ['./patient-entry.component.css']
})
export class PatientEntryComponent {
pid=""
pname=""
address=""
contact=""
date=""
image=""
doc_name=""
view=()=>{
  let data:any={
    'pid':this.pid,
    'pname':this.pname,
    'address':this.address,
    'contact':this.contact,
    'date':this.date,
    'image':this.image,
    'doc_name':this.doc_name
  }
  console.log(data)
}
}
