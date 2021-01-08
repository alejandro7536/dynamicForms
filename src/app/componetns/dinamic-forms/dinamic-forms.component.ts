import { Component, DoCheck, OnInit, forwardRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-dinamic-forms',
  templateUrl: './dinamic-forms.component.html',
  styleUrls: ['./dinamic-forms.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DinamicFormsComponent),
      multi: true
    },
     {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DinamicFormsComponent),
      multi: true
    }
  ]
})
export class DinamicFormsComponent implements OnInit, ControlValueAccessor, Validator {

  formArray: any;
  registrationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }


  // ControlValueAccessor implementation

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    console.log("write Value");
    val && this.registrationForm.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.registrationForm.valueChanges.subscribe(fn);

  }
  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.registrationForm.disable() : this.registrationForm.enable();
  }
  
  

  ngOnInit(): void {

    this.registrationForm = this.fb.group({});

    this.http.get('assets/metadata/userForm.json').subscribe(data => {
      this.formArray = data;
      this.createFormControl();
    });

    // Observar el form mediante rxjs
    // const event$ = fromEvent<Event>(document.getElementsByTagName('form'), 'change');
    // event$.subscribe(event => {
    //   this.save();
    // });
  }

  createFormControl() {
    this.formArray.forEach((element: any) => {
      this.registrationForm.addControl(element.ID, element.Required ?
        new FormControl(element.Value || '', {
          validators: [Validators.required],
          updateOn: element.updateOn
        }) :
        new FormControl(element.Value || '', { updateOn: element.updateOn }))
    });

  }

  save() {
    console.log(this.registrationForm.controls);

  }

  validate(c: AbstractControl): ValidationErrors | null{
    console.log("Validation from acces", c);
    return this.registrationForm.valid ? null : { invalidForm: {valid: false, message: "form fields are invalid"}};
  }



}
