import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CategoriaService } from '../categoria.service';
import { CadastrarCategoriaModel } from '../categoria.models';
import { finalize } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastrar-categoria',
  imports: [
    MatFormFieldModule,
    MatInputModule, // funciona com o formfieldmodule
    ReactiveFormsModule,
    MatDivider,
    MatCardModule,
    MatIconModule,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './cadastrar-categoria.html',
})
export class CadastrarCategoria {
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly categoriaService = inject(CategoriaService);
  protected readonly router = inject(Router);

  protected categoriaForm = this.formBuilder.group({
    titulo: [''],
  });

  public cadastrar() {
    if (this.categoriaForm.invalid) return;

    const categoriaModel = this.categoriaForm.value as CadastrarCategoriaModel;

    this.categoriaService
      .cadastrar(categoriaModel)
      .pipe(finalize(() => this.router.navigate(['/categorias'])))
      .subscribe((res) => console.log(res));
  }
}
