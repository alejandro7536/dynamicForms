import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinamicFormsComponent } from './componetns/dinamic-forms/dinamic-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloydComponent } from './componetns/floyd/floyd.component';
import { SaveDirective } from './directives/save.directive';
import { CustomInputComponent } from './componetns/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DinamicFormsComponent,
    FloydComponent,
    SaveDirective,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
