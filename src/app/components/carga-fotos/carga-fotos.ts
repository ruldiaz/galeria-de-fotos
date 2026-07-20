import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carga-fotos',
  imports: [CommonModule, FormsModule],
  templateUrl: './carga-fotos.html',
  styleUrl: './carga-fotos.css',
})
export class CargaFotos {
  @Output() cerrar = new EventEmitter<void>();
  @Output() agregarFoto = new EventEmitter<any>();

  //  Data binding bidireccional con ngModel
  nuevaFoto = {
    titulo: '',
    descripcion: '',
    url: '',
    categoria: ''
  };

  categorias = [
    {valor: 'paisaje', nombre: 'Paisaje'},
    {valor: 'naturaleza', nombre: 'Naturaleza'},
    {valor: 'urbano', nombre: 'Urbano'},
    {valor: 'flora', nombre: 'Flora'},
    {valor: 'animales', nombre: 'Animales'},
    {valor: 'abstracto', nombre: 'Abstracto'},
    {valor: 'general', nombre: 'General'}
  ];

  cerrarModal(): void {
    this.cerrar.emit();
  }

  guardarFoto(): void {
    if (this.nuevaFoto.titulo.trim() && this.nuevaFoto.descripcion.trim()) {
      this.agregarFoto.emit(this.nuevaFoto);
      // Resetear el formulario
      this.nuevaFoto = {
        titulo: '',
        descripcion: '',
        url: '',
        categoria: ''
      };
    } else {
      alert("Por favor, completa los campos obligatorios: Título y Descripción");
    }
  }
}
