import { Component } from '@angular/core';
import { VotingService } from '../../servicios/voting.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  propertyBinding = "#000"


    // Propiedades para las imágenes y títulos
    tituloIntroduccionIP = "Rutina Vikinga";
    tituloSedes = "Conoce nuestras sedes";
    tituloEntrenadores = "Nuestros Entrenadores";
    tituloSede1 = "Asgard";
    tituloSede2 = "Midgard";
    tituloSede3 = "Yggdrasil";
    tituloServicios = "Servicios";
    tituloEntrenadorCard1 = "Alejo Torres";
    tituloEntrenadorCard2 = "Luis Ramírez";
    tituloEntrenadorCard3 = "Charlie Vargas";
    tituloEntrenadorCard4 = "Vale Díaz";
    tituloEntrenadorCard5 = "Laura Gomez";
    tituloEntrenadorCard6 = "Gabi Sanchez";
    imagenPrincipal = "assets/img/img1.png";
    imagenSede1 = "assets/img/img2.png";
    imagenSede2 = "assets/img/img3.png";
    imagenSede3 = "assets/img/img4.png";
    entrenadorCard1 = "assets/img/img6.png";
    entrenadorCard2 = "assets/img/img7.png";
    entrenadorCard3 = "assets/img/img8.png";
    entrenadorCard4 = "assets/img/img9.png";
    entrenadorCard5 = "assets/img/img10.png";
    entrenadorCard6 = "assets/img/img12.png";
  
    // Constructor para inyectar el servicio de votación
    constructor(private votingService: VotingService) { }
  
    // Métodos para votar por cada sede
    voteForSede1() {
      this.votingService.voteForSede('sede1'); // Cambiar 'sede1' por el identificador adecuado
    }
  
    voteForSede2() {
      this.votingService.voteForSede('sede2'); // Cambiar 'sede2' por el identificador adecuado
    }
  
    voteForSede3() {
      this.votingService.voteForSede('sede3'); // Cambiar 'sede3' por el identificador adecuado
    }
  
    // Métodos para obtener los votos de cada sede
    getVotesForSede1(): number {
      return this.votingService.getVotesForSede('sede1'); // Cambiar 'sede1' por el identificador adecuado
    }
  
    getVotesForSede2(): number {
      return this.votingService.getVotesForSede('sede2'); // Cambiar 'sede2' por el identificador adecuado
    }
  
    getVotesForSede3(): number {
      return this.votingService.getVotesForSede('sede3'); // Cambiar 'sede3' por el identificador adecuado
    }
  }