import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {Footer} from './footer/footer';
import { Logo } from './logo/logo';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, Logo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected couleurFond: string = 'white';

  protected changerCouleur(couleur: string): void {
    this.couleurFond = couleur;
  }
}
