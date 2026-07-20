import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Foto {
  id: number;
  titulo: string;
  descripcion: string;
  url: string;
  categoria: string;
  fecha: string;
  likes: number;
}

@Component({
  selector: 'app-foto-detalle',
  imports: [CommonModule],
  templateUrl: './foto-detalle.html',
  styleUrl: './foto-detalle.css',
})
export class FotoDetalle {
  @Input() foto: Foto | null = null;
  @Output() cerrar = new EventEmitter<void>();
  @Output() eliminar = new EventEmitter<number>();

  cerrarDetalle(): void {
    this.cerrar.emit();
  }

  eliminarFoto(): void {
    if (this.foto && confirm(`¿Seguro que deseas eliminar "${this.foto.titulo}"?`)) {
      this.eliminar.emit(this.foto.id);
    }
  }
}
