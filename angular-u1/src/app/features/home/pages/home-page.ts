import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Importamos el RouterLink

@Component({
  selector: 'app-home-page',
  imports: [RouterLink], // Lo agregamos a los imports
  template: `
    <section>
      <h1>PPW Angular 21</h1>
      <p>Proyecto incremental listo para crecer.</p>
      
      <!-- Enlace hacia la nueva feature[cite: 1] -->
      <a routerLink="/profile">Ir a mi Perfil</a>
    </section>
  `
})
export class HomePage {}