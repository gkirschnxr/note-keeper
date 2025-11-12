import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { StickyCardComponents } from "../sticky-card/sticky-card.components";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCard,
    MatCardContent,
    StickyCardComponents
],
  templateUrl: './inicio.html',
})
export class Inicio {
  estiloNotas = [
    { titulo: 'Inicio', conteudo: 'home' },
    { titulo: 'Categorias', icone: 'bookmark', link: '/categorias' },
    { titulo: 'Notas', icone: 'article', link: '/notas' },
  ];
}
