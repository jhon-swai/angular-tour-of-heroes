import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Renaming the property
  // hero: Hero ={
  //   id :1,
  //   name: 'Windstorm'
  // };
  selectedHero: Hero;
  heroes: Hero[];

  // Method to handle selected hero
  onSelect( hero:Hero ): void{
    this.selectedHero = hero;
  }
// Function to retrieve heroes from the services
getHeroes(): void {
  this.heroes = this.heroService.getHeroes();
}

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
