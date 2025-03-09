import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from '../components/menu-bar/menu-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Adicione isso se estiver usando Standalone Components
  imports: [RouterOutlet, MenuBarComponent],  // ✅ Certifique-se de que MenuBarComponent é standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app'; 
}

