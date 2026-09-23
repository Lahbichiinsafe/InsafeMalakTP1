import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  couleurs = ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'];

  @Output() couleurChoisie = new EventEmitter<string>();
  choisir(couleur: string) {
    console.log('clic', couleur);
    this.couleurChoisie.emit(couleur);
  }
}