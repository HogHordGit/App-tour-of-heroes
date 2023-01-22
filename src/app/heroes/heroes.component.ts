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

  heroes: HeroInterface[] = [];
  selectedHero?: HeroInterface;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe({
      next: (res) => {
        this.heroes = res;
      }
    })
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as HeroInterface)
      .subscribe((hero: HeroInterface) => {
        this.heroes.push(hero);
      });
  }

  delete(hero: HeroInterface): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

}
