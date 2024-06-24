import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private votes: { [sedeId: string]: number } = {}; // Objeto para almacenar los votos por cada sede

  constructor() { }

  // Método para registrar un voto por una sede
  voteForSede(sedeId: string) {
    if (!this.votes[sedeId]) {
      this.votes[sedeId] = 0;
    }
    this.votes[sedeId]++;
  }

  // Método para obtener el número de votos de una sede específica
  getVotesForSede(sedeId: string): number {
    return this.votes[sedeId] || 0;
  }

}