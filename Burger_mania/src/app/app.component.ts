import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from "./Componentes/header/header.component";
import { HomeComponent } from "./View/home/home.component";
import { CardapioCategoriaComponent } from './View/cardapio-categoria/cardapio-categoria.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Burger_mania';
}
