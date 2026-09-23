import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import {Footer} from './footer/footer';
import { Logo } from './logo/logo';

@Component({
  imports: [RouterOutlet, Header, Footer, Logo],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('InsafeMalakTP1');

  couleurFond = 'white';

  changerCouleur(couleur: string) {
    this.couleurFond = couleur;
  }
}

