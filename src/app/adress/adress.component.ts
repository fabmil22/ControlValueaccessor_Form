import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AdressComponent),
        multi: true
    }
],
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit , ControlValueAccessor {
  private _address: Address = <Address>{};


  ngOnInit() {
  }
  writeValue(value: any) {
    this._address = value;
}

propagateChange = (_: any) => { };

registerOnChange(fn) {
    this.propagateChange = fn;
}

registerOnTouched() { }

constructor() { }

get addressLine1() {
    return this._address.addressLine1;
}
set addressLine1(value) {
    this._address.addressLine1 = value;
    this.propagateChange(this._address);
}

get addressLine2() {
    return this._address.addressLine2;
}
set addressLine2(value) {
    this._address.addressLine2 = value;
    this.propagateChange(this._address);
}

get city() {
    return this._address.city;
}
set city(value) {
    this._address.city = value;
    this.propagateChange(this._address);
}

get state() {
    return this._address.state;
}
set state(value) {
    this._address.state = value;
    this.propagateChange(this._address);
}
}
