import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Hero }        from '../data-model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroservice: HeroService) { }

  ngOnInit() {
   // this.getHeroes();
    //console.log(this.getHeroes());
  }
  getHeroes(){
    this.isLoading = true;
    this.heroes = this.heroservice.getHeroes()
    .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }
  select(hero: Hero) { this.selectedHero = hero; }

}
