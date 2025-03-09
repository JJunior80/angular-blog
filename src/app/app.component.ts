import { Component } from '@angular/core';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MenuBarComponent]
})
export class AppComponent {
  title = 'my-app';
}
