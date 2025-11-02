import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [
    MatButtonModule,
    MatCard,
    MatCardContent,
    MatDivider,
    MatCardActions,
    MatIcon,
    RouterLink
  ],
  templateUrl: './inicio.html',
})
export class Inicio {}
