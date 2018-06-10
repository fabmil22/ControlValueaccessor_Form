import { Component, OnInit } from '@angular/core';

interface Person {
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-formpadre',
  templateUrl: './formpadre.component.html',
  styleUrls: ['./formpadre.component.css']
})
export class FormpadreComponent implements OnInit {
  person: Person = <Person>{ address: <Address>{}};
  constructor() { }

  ngOnInit() {
  }

}
