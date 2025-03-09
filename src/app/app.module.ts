import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],

  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [] // ✅ O AppComponent deve ser iniciado aqui
})
export class AppModule { }

