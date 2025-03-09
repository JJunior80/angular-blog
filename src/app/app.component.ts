import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCardComponent } from "./components/small-card/small-card.component";
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { HomesComponent } from "./pages/homes/homes.component";
import { BigCardComponent } from './components/big-card/big-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
