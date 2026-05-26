import { Component } from '@angular/core';
import { ProductoListaComponent } from "./producto-lista/producto-lista.component";

@Component({
  selector: 'app-root',
  imports: [ProductoListaComponent], 
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'inventario-app';
}
