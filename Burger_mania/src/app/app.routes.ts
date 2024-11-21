
import {RouterModule, Routes} from '@angular/router';
import { NgModule} from '@angular/core';
import path from 'path';
import { HomeComponent } from './View/home/home.component';
import { CardapioCategoriaComponent } from './View/cardapio-categoria/cardapio-categoria.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'cardapio_categorias',
        component:CardapioCategoriaComponent ,
        title:'cardapio_categorias'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}