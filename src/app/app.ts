import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Logo } from './logo/logo';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Logo, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected couleurFond: string = 'white';

  protected changerCouleur(couleur: string): void {
    this.couleurFond = couleur;
  }
}