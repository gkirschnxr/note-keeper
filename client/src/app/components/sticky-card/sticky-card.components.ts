import { Component, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardActions } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sticky-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardActions,
    MatIcon,
    RouterModule
  ],
  templateUrl: './sticky-card.components.html',
})
export class StickyCardComponents {
  @Input({ required: true }) titulo!: string;
  @Input() descricao!: string;
  @Input() route!: string;
  @Input() rotacao: number = 0;
}
