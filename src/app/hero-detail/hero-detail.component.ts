import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../shared/services/hero.service';
import { HeroInterface } from '../shared/types/hero.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) {}

  @Input() hero?: HeroInterface;

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    if (this.route.snapshot.paramMap.get("id") !== null) {
      const id = Number(this.route.snapshot.paramMap.get("id"));
    
      this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    }
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

}
