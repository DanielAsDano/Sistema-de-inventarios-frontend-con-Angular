import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterLink, RouterLinkActive], 
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'inventario-app';
  isDarkMode = false;

  ngOnInit(): void {
    this.cargarTema();
  }

  cargarTema(): void {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const temaGuardado = localStorage.getItem('theme');
      if (temaGuardado) {
        this.isDarkMode = temaGuardado === 'dark';
      } else {
        // Si no hay preferencia guardada, verificar preferencia del sistema operativo
        this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      this.aplicarTema();
    }
  }

  toggleTema(): void {
    this.isDarkMode = !this.isDarkMode;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
    this.aplicarTema();
  }

  private aplicarTema(): void {
    if (typeof document !== 'undefined') {
      const htmlElement = document.documentElement;
      if (this.isDarkMode) {
        htmlElement.setAttribute('data-bs-theme', 'dark');
      } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
      }
    }
  }
}
