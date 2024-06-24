import { Component, OnInit } from '@angular/core';
import { UnsplashService } from '../../servicios/unsplash.service';
@Component({
  selector: 'app-gallery-gym',
  templateUrl: './gallery-gym.component.html',
  styleUrl: './gallery-gym.component.css'
})
export class GalleryGymComponent implements OnInit {

  images: any[] = [];
  galleryTitle: string = 'Servicios';

  constructor(private unsplashService: UnsplashService) { }

  ngOnInit(): void {
    this.unsplashService.searchGymImages('gym')
      .subscribe((response: any) => {
        this.images = response.results.map((result: any, index: number) => ({
          urls: {
            small: result.urls.small
          },
          alt_description: result.alt_description || `Imagen ${index + 1}`,
          title: this.getImageTitle(index),
          custom_description: this.getImageDescription(index)
        })).slice(0, 6); // Limitamos a 6 imágenes como máximo según tu solicitud
      });
  }

  private getImageTitle(index: number): string {
    switch (index) {
      case 0: return 'Crossfit';
      case 1: return 'PowerLifting';
      case 2: return 'Halterofilia';
      case 3: return 'Cardio';
      case 4: return 'Aeróbicos';
      case 5: return 'Boxing';
      default: return `Imagen ${index + 1}`;
    }
  }

  private getImageDescription(index: number): string {
    switch (index) {
      case 0: return 'Espacio para poder entrenar todo tu cuerpo a partir de tu peso y capacidades.';
      case 1: return 'Espacio para mancuernas y ganar fuerza.';
      case 2: return 'Levantamientos de pesas olímpicas.';
      case 3: return 'Zona para mejorar tu capacidad aeróbica.';
      case 4: return 'Espacio de clase de aeróbicos.';
      case 5: return 'Zona para mejorar tu coordinación, resistencia y velocidad.';
      default: return 'Descripción predeterminada';
    }
  }
}