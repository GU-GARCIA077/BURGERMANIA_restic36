import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-acessar-cardapio',
  imports: [MatButtonModule,MatDividerModule,MatIconModule,RouterModule],
  templateUrl: './button-acessar-cardapio.component.html',
  styleUrl: './button-acessar-cardapio.component.css'
})
export class ButtonAcessarCardapioComponent {

}
