import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/services/hero.service';
import { MessageService } from '../shared/services/message.service';
import { HeroInterface } from '../shared/types/hero.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: HeroInterface[] = [];
  selectedHero?: HeroInterface;

  onSelect(hero: HeroInterface): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (res) => {
        this.heroes = res;
      }
    })
  }

}
