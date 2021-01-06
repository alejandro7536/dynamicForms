import { Component, DoCheck, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dinamic-forms',
  templateUrl: './dinamic-forms.component.html',
  styleUrls: ['./dinamic-forms.component.css']
})
export class DinamicFormsComponent implements OnInit, DoCheck {
  
  formArray: any;
  registrationForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }
  ngDoCheck(): void {
  }

  ngOnInit(): void {

    this.registrationForm = this.fb.group({});

    this.http.get('assets/metadata/userForm.json').subscribe(data => {
        this.formArray = data;
        console.log(this.formArray);
        this.createFormControl();
      });

  }

  createFormControl() {
    this.formArray.forEach((element: any) => {
      this.registrationForm.addControl(element.ID, element.Required ? new FormControl(element.Value || '', Validators.required): new FormControl(element.Value || ''))
    });

  }

  save() {
    console.log(this.registrationForm.controls);
    
  }



}
