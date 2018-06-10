import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-actuo',
  template:`
  <div class="custom-input">
    {{ label }}
    <input type="text" (input)="onChange($event)"  />
  </div>
`,
  styleUrls: ['./actuo.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ActuoComponent),
        multi: true
    }
]
})
export class ActuoComponent implements ControlValueAccessor {
  @Input() label: string;

  _value = '';
  propagateChange:any = () => {};

  writeValue(value: any) {
    if( value ){
      this._value = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: () => void): void { }

  onChange(event){
    this.propagateChange(event.target.value);
  }
/* get actua1() {

  return this._actuo.actua1;
}

set actua1(value) {
  this._actuo.actua1 = value;
  this.propagateChange(this._actuo);
} */


}
