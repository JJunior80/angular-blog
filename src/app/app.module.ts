import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    // MenuBarComponent // ✅ Adicione aqui se NÃO for standalone
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MenuBarComponent,
    AppComponent
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }
