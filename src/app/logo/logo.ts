import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  styleUrl: './logo.scss'
})
export class Logo {
  protected readonly couleurs: string[] = ['#F25022', '#7FBA00', '#00A4EF', '#FFB900'];

  @Output() readonly couleurChoisie = new EventEmitter<string>();

  protected choisir(couleur: string): void {
    this.couleurChoisie.emit(couleur);
  }
}