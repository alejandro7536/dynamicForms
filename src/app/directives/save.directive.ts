import { Directive, ElementRef, Host, HostListener} from '@angular/core';
import { DinamicFormsComponent } from '../componetns/dinamic-forms/dinamic-forms.component';

@Directive({
  selector: '[appSave]'
})
export class SaveDirective {

  constructor(
    private el:ElementRef,
    @Host() private dinamicFormsComponent:DinamicFormsComponent
    ) { 

  }

  @HostListener('change') cambio() {
    console.info('Cambió el valor del input ', this.el.nativeElement.id, ' a ' , this.el.nativeElement.value);
    this.dinamicFormsComponent.registrationForm.get(this.el.nativeElement.id).setValue(this.el.nativeElement.value);

    this.dinamicFormsComponent.save();
  }
  

}
