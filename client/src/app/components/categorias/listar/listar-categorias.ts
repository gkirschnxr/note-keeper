import { Component, inject } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDivider } from "@angular/material/divider";
import { MatCard, MatCardModule } from "@angular/material/card";

@Component({
  selector: 'app-listar-categorias',
  imports: [
    AsyncPipe,
    MatButtonModule,
    MatIconModule,
    MatDivider,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './listar-categorias.html',
})
export class ListarCategorias {
  protected readonly categoriaService = inject(CategoriaService);

  protected readonly categorias$ = this.categoriaService.selecionarTodas();
}
