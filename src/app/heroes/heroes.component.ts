import { Component, Pipe } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  //imports: [Pipe],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}
