import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ShellComponent } from "./components/shell/shell.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatIconModule, ShellComponent],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('note-keeper');
}
