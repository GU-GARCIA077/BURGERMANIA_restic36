import { Component } from '@angular/core';
import { ContainerImgComponent } from '../../Componentes/container-img/container-img.component';
import { ButtonComponent } from "../../Componentes/button/button.component";
import { ButtonAcessarCardapioComponent } from '../../Componentes/button-acessar-cardapio/button-acessar-cardapio.component';

@Component({
  selector: 'app-home',
  imports: [ContainerImgComponent, ButtonComponent,ButtonAcessarCardapioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
