import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FotoDetalle } from '../foto-detalle/foto-detalle';
import { CargaFotos } from '../carga-fotos/carga-fotos';

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
  selector: 'app-galeria',
  imports: [CommonModule, FotoDetalle, CargaFotos],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css',
})
export class Galeria implements OnInit{
  fotos: Foto[] = [];
  fotoSeleccionada: Foto | null = null;
  mostrarDetalle: boolean = false;
  mostrarModal: boolean = false;

  ngOnInit(): void {
    // Datos iniciales de ejemplo
    this.fotos = [
      {
        id: 1,
        titulo: "Puesta de sol en la playa",
        descripcion: "Hermosa puesta de sol en la costa del Pacifico",
        url: "https://picsum.photos/seed/sunset/400/300",
        categoria: "paisaje",
        fecha: "2024-01-15",
        likes: 24
      },
      {
        id: 2,
        titulo: 'Bosque de niebla',
        descripcion: 'Bosque cubierto de niebla en la montaña',
        url: 'https://picsum.photos/seed/forest/400/300',
        categoria: 'naturaleza',
        fecha: '2024-01-20',
        likes: 18
      },
      {
        id: 3,
        titulo: 'Ciudad nocturna',
        descripcion: 'Vista panorámica de la ciudad de noche',
        url: 'https://picsum.photos/seed/city/400/300',
        categoria: 'urbano',
        fecha: '2024-01-25',
        likes: 31
      },
      {
        id: 4,
        titulo: 'Flores en primavera',
        descripcion: 'Jardín lleno de flores coloridas',
        url: 'https://picsum.photos/seed/flowers/400/300',
        categoria: 'flora',
        fecha: '2024-02-01',
        likes: 15
      },
      {
        id: 5,
        titulo: 'Atardecer en la montaña',
        descripcion: 'Vista espectacular del atardecer desde la cima',
        url: 'https://picsum.photos/seed/mountain/400/300',
        categoria: 'paisaje',
        fecha: '2024-02-05',
        likes: 42
      },
      {
        id: 6,
        titulo: 'Café de la mañana',
        descripcion: 'Momento tranquilo con café caliente',
        url: 'https://picsum.photos/seed/coffee/400/300',
        categoria: 'general',
        fecha: '2024-02-10',
        likes: 12
      }
    ];
  }

  seleccionarFoto(foto: Foto): void {
    this.fotoSeleccionada = foto;
    this.mostrarDetalle = true;
  }

  cerrarDetalle(): void {
    this.mostrarDetalle = false;
    this.fotoSeleccionada = null;
  }

  abrirModal(): void {
    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
  }

  agregarFoto(nuevaFoto: any): void {
    const foto: Foto = {
      id: this.fotos.length + 1,
      titulo: nuevaFoto.titulo,
      descripcion: nuevaFoto.descripcion,
      url: nuevaFoto.url || "https://picsum.photos/seed/default/400/300",
      categoria: nuevaFoto.categoria || "general",
      fecha: new Date().toISOString().split("T")[0],
      likes: 0
    };
    this.fotos.push(foto);
    this.cerrarModal();
  }

  eliminarFoto(id: number): void {
    this.fotos = this.fotos.filter(foto => foto.id !== id);
    if (this.fotoSeleccionada?.id === id) {
      this.cerrarDetalle();
    }
  }
}
