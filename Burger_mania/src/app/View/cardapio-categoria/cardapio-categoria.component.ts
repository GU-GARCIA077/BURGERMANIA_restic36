import { Component } from '@angular/core';
import { CardComponent } from '../../Componentes/card/card.component';
import { ProdInterface } from '../../interfaces/prod-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardapio-categoria',
  imports: [CardComponent,CommonModule],
  templateUrl: './cardapio-categoria.component.html',
  styleUrl: './cardapio-categoria.component.css'
})
export class CardapioCategoriaComponent {
  prodListCat: ProdInterface[] =[
    {
      "id":1,
      "categoria":"X-Vegano",
      "nome":"X-Vegano",
      "image":"/assets/images/XTUDO.png",
      "descricao_r":"Pão, Hambúguer, Alface, Tomate, Queijo e Maionese.",
      "desc_Com":"teste" ,
      "valor": 0
    },
    {
      "id":2,
      "categoria":"X-Fitness",
      "nome":"X-Fitness",
      "image":"/assets/images/XTUDO.png",
      "descricao_r":"Pão, Hambúguer, Alface, Tomate, Queijo e Maionese.",
      "desc_Com": "teste",
      "valor":0 
    },
    {
      "id":3,
      "categoria":"X-Infarto",
      "nome":"X-Infarto",
      "image":"/assets/images/XTUDO.png",
      "descricao_r": "Pão, Hambúguer, Alface, Tomate, Queijo e Maionese.",
      "desc_Com":"teste" ,
      "valor": 0
    }

  ]
}
