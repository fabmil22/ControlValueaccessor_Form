import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-radio-pre',
  template: `<input type="radio" value="beef" name="food" [(ngModel)]="myFood"> Beef
  <input type="radio" value="lamb" name="food"  (click)="onChange($event)"> Lamb
  <input type="radio" value="fish" name="food"  (click)="onChange($event)"> Fish`,
  styleUrls: ['./radio-pre.component.css'],
  providers: [
    {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => RadioPreComponent),
        multi: true
    }
]
})
export class RadioPreComponent implements ControlValueAccessor {
  myFood: string;
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
}
