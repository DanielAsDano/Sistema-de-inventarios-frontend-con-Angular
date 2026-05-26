import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterLink, RouterLinkActive], 
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'inventario-app';
}
