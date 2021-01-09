import { Component, Input, OnInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor  {

  @Input() myLabel: string = '';
  counter: number = 0;

  value: string;
  isDisabled: boolean;
  onChange = (_:any) => {}
  onTouch = () => { }

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: string) {
    this.counter = value.length;
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    console.log('From ControlValueAccessor');
    
    if (value) {
      this.value = value || '';
      this.counter = value.length;
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {this.onTouch = fn;}

  setDisabledState?(isDisabled: boolean): void {this.isDisabled = isDisabled;}


}
