import { Component } from '@angular/core';
import { HEROES } from '../shared/data/mock-data';
import { HeroInterface } from '../shared/types/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

  heroes = HEROES;
  selectedHero?: HeroInterface;

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
  }

}
