import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-lista',
  imports: [CommonModule, RouterLink],
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent {
  productos: Producto[] = [];

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

  eliminarProducto(id: number){
    this.productoServicio.eliminarProducto(id).subscribe({
      next: (datos) => this.obtenerProductos(),
      error: (errores) => console.log(errores)
    })
  }

  // Getters para las mini-tarjetas de métricas
  get totalProductos(): number {
    return this.productos ? this.productos.length : 0;
  }

  get totalExistencias(): number {
    return this.productos ? this.productos.reduce((suma, p) => suma + (Number(p.existencia) || 0), 0) : 0;
  }

  get valorTotalInventario(): number {
    return this.productos ? this.productos.reduce((suma, p) => suma + ((Number(p.precio) || 0) * (Number(p.existencia) || 0)), 0) : 0;
  }
}
