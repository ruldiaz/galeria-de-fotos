import { Component, signal } from '@angular/core';
import { Galeria } from './components/galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('galeria-de-fotos');
}
