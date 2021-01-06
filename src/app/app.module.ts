import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinamicFormsComponent } from './componetns/dinamic-forms/dinamic-forms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FloydComponent } from './componetns/floyd/floyd.component';

@NgModule({
  declarations: [
    AppComponent,
    DinamicFormsComponent,
    FloydComponent
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
