import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


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
  heroes = HEROES;
  // Method to handle selected hero
  onSelect(hero: Hero): void{
    this.selectedHero = hero;

  }


  constructor() { }

  ngOnInit() {
  }

}
