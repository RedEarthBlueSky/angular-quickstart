
import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId:  module.id,
  selector:  'my-dashboard',
  templateUrl:  'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];  //  define a heroes array property

  //  inject the HeroService into the constructor and hold it in a private
  //  heroService field.
  constructor (
    private router: Router,
    private heroService: HeroService) {
    }

  //  call service to get heroes insode the Angular ngOnInit lifecycle hook
  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
