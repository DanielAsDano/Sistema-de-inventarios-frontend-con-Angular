import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[];

  // Nueva forma de inyectar servicios 
  private productoServicio = inject(ProductoService);
  private enrutador = inject(Router);

  ngOnInit() {
    //Cargamos los productos
    this.obtenerProductos();
  }

  private obtenerProductos(): void {
    this.productoServicio.obtenerProductosLista().subscribe({
      next: (datos) => {
        this.productos = datos;
      },
      error: (error) => {
        console.error("Error al obtener los productos", error);
      }
    });
  }  

  editarProducto(id: number){
    this.enrutador.navigate(['editar-producto', id])
  }
}
